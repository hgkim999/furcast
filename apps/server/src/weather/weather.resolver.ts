import { Args, Query, Resolver } from '@nestjs/graphql';

import { Weather } from './Weather';
import { WeatherService } from './weather.service';
import { GetWeatherArgs } from './weather.args';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { WeatherInfo } from './WeatherInfo';
import { WeatherOverview } from './WeatherOverview';
import { HourlyWeather } from 'openweather-api-node';

@Resolver(Weather)
export class WeatherResolver {
  constructor(
    @InjectPinoLogger(WeatherResolver.name)
    private readonly logger: PinoLogger,
    private readonly weatherService: WeatherService,
  ) {}

  @Query(() => WeatherInfo)
  async weather(@Args() { lat, lon }: GetWeatherArgs) {
    this.weatherService.fetchHourlyForecast(lat, lon);
    return this.weatherService.fetchWeather(lat, lon);
  }

  @Query(() => String)
  async location(@Args() { lat, lon }: GetWeatherArgs) {
    return this.weatherService.fetchCoordsToLocation(lat, lon);
  }

  @Query(() => WeatherOverview)
  async overview(
    @Args() { lat, lon }: GetWeatherArgs,
  ): Promise<HourlyWeather[]> {
    return this.weatherService.fetchDailyOverview(lat, lon);
  }
}
