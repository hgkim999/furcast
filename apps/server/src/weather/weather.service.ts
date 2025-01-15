import { WEATHER_UNITS } from '@furcast/core';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import OpenWeatherAPI, {
  CurrentWeather,
  HourlyWeather,
} from 'openweather-api-node';
import { OPENWEATHER_API_ENDPOINT, OPENWEATHER_API_KEY } from 'src/utils/env';

export enum FETCH_WEATHER_TYPES {
  CURRENT = 'current',
  HOURLY = 'hourly',
  OVERVIEW = 'overview',
}

@Injectable()
export class WeatherService {
  private readonly redis: Redis | null;
  weather: OpenWeatherAPI;

  constructor(
    private readonly redisService: RedisService,
    @InjectPinoLogger(WeatherService.name)
    private readonly logger: PinoLogger,
  ) {
    this.weather = new OpenWeatherAPI({
      key: OPENWEATHER_API_KEY,
    });
    this.redis = this.redisService.getOrThrow();
  }

  async fetchCoordsToLocation(
    lat: number,
    lon: number,
    units: WEATHER_UNITS = WEATHER_UNITS.METRIC,
  ): Promise<string> {
    const location = await this.weather.getLocation({
      coordinates: { lat, lon },
      units,
    });
    return location.name;
  }

  async fetchWeather(
    lat: number,
    lon: number,
    units: WEATHER_UNITS = WEATHER_UNITS.METRIC,
  ): Promise<CurrentWeather> {
    const { lat: nLat, lon: nLon } = this.normalizeCoordinates(lat, lon);
    const redisKey = this.getCoordinatesRedisKey(nLat, nLon);
    const cachedWeather = await this.redis.get(redisKey);

    if (cachedWeather) {
      this.logger.debug('Weather info fetched from cache');
      return JSON.parse(cachedWeather);
    } else {
      const currentWeatherInfo = await this.weather.getCurrent({
        coordinates: { lat: nLat, lon: nLon },
        units,
      });

      await this.redis.set(
        redisKey,
        JSON.stringify(currentWeatherInfo),
        'EX',
        60 * 5,
      );

      this.logger.debug('Weather info fetched from API, and cached');

      return currentWeatherInfo;
    }
  }

  async fetchHourlyForecast(
    lat: number,
    lon: number,
    units: WEATHER_UNITS = WEATHER_UNITS.METRIC,
  ): Promise<HourlyWeather[]> {
    const { lat: nLat, lon: nLon } = this.normalizeCoordinates(lat, lon);
    const redisKey = this.getCoordinatesRedisKey(
      nLat,
      nLon,
      FETCH_WEATHER_TYPES.HOURLY,
    );
    const cachedWeather = await this.redis.get(redisKey);

    if (cachedWeather) {
      this.logger.debug('Hourly weather fetched from cache');
      return JSON.parse(cachedWeather);
    } else {
      const hourlyForecast = await this.weather.getHourlyForecast(12, {
        coordinates: { lat: nLat, lon: nLon },
        units,
      });

      this.logger.debug({ hourlyForecast });

      await this.redis.set(
        redisKey,
        JSON.stringify(hourlyForecast),
        'EX',
        60 * 5,
      );

      this.logger.debug('Weather info fetched from API, and cached');

      return hourlyForecast;
    }
  }

  async fetchDailyOverview(
    lat: number,
    lon: number,
    units: WEATHER_UNITS = WEATHER_UNITS.METRIC,
  ) {
    const { lat: nLat, lon: nLon } = this.normalizeCoordinates(lat, lon);
    const redisKey = this.getCoordinatesRedisKey(
      nLat,
      nLon,
      FETCH_WEATHER_TYPES.OVERVIEW,
    );
    const cachedWeather = await this.redis.get(redisKey);

    if (cachedWeather) {
      this.logger.debug('Weather Overview fetched from cache');
      return JSON.parse(cachedWeather);
    } else {
      const res = await this.fetchOpenWeather('/3.0/onecall/overview', {
        lat: String(nLat),
        lon: String(nLon),
        units,
      });

      const overview = await res.json();
      console.log({ overview });
      this.logger.debug({ overview });

      await this.redis.set(redisKey, JSON.stringify(overview), 'EX', 60 * 5);

      this.logger.debug('Weather Overview fetched from API, and cached');

      return overview;
    }
  }

  /**
   *
   * @param path
   * @returns
   */
  async fetchOpenWeather(path: string, params: Record<string, string> = {}) {
    const url =
      OPENWEATHER_API_ENDPOINT + (path.startsWith('/') ? path : `/${path}`);
    const allParams = {
      units: WEATHER_UNITS.METRIC,
      ...params,
      appid: OPENWEATHER_API_KEY,
    };
    const query = new URLSearchParams(allParams).toString();

    return fetch(url + `?${query}`);
  }

  private getCoordinatesRedisKey(
    lat: number,
    lon: number,
    type: FETCH_WEATHER_TYPES = FETCH_WEATHER_TYPES.CURRENT,
  ) {
    return `weather:${type}:${lat}_${lon}`;
  }

  private normalizeCoordinates(lat: number, lon: number) {
    return { lat: Math.round(lat * 10) / 10, lon: Math.round(lon * 10) / 10 };
  }
}
