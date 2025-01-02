import { Query, Resolver } from '@nestjs/graphql';

import { Weather } from './Weather';
import { WeatherService } from './weather.service';

@Resolver(Weather)
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) {}

  @Query(() => String)
  async weather() {
    return 'Hello world';
  }
}
