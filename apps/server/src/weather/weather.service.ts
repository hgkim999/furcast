import { RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import OpenWeatherAPI, { CurrentWeather } from 'openweather-api-node';
import { OPENWEATHER_API_KEY } from 'src/utils/env';

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

  async fetchCoordsToLocation(lat: number, lon: number): Promise<string> {
    const location = await this.weather.getLocation({
      coordinates: { lat, lon },
    });
    return location.name;
  }

  async fetchWeather(lat: number, lon: number): Promise<CurrentWeather> {
    const { lat: nLat, lon: nLon } = this.normalizeCoordinates(lat, lon);
    const redisKey = this.getCoordinatesRedisKey(nLat, nLon);
    const cachedWeather = await this.redis.get(redisKey);

    if (cachedWeather) {
      this.logger.debug('Weather info fetched from cache');
      return JSON.parse(cachedWeather);
    } else {
      const currentWeatherInfo = await this.weather.getCurrent({
        coordinates: { lat: nLat, lon: nLon },
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

  private getCoordinatesRedisKey(lat: number, lon: number) {
    return `weather:current:${lat}_${lon}`;
  }

  private normalizeCoordinates(lat: number, lon: number) {
    return { lat: Math.round(lat * 10) / 10, lon: Math.round(lon * 10) / 10 };
  }
}
