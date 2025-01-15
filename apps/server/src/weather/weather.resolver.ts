import { Args, Query, Resolver } from '@nestjs/graphql';

import { Weather } from './Weather';
import { WeatherService } from './weather.service';
import { GetWeatherArgs } from './weather.args';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { WeatherInfo } from './WeatherInfo';

@Resolver(Weather)
export class WeatherResolver {
  constructor(
    @InjectPinoLogger(WeatherResolver.name)
    private readonly logger: PinoLogger,

    private readonly weatherService: WeatherService,
  ) {}

  @Query(() => WeatherInfo)
  async weather(@Args() { lat, lon }: GetWeatherArgs) {
    const weather = await this.weatherService.fetchWeather(lat, lon);
    this.logger.info(weather);
    return weather;
  }

  @Query(() => String)
  async location(@Args() { lat, lon }: GetWeatherArgs) {
    const location = await this.weatherService.fetchCoordsToLocation(lat, lon);
    this.logger.info(location);
    return location;
  }
}
