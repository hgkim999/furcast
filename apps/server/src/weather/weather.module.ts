import { Module } from '@nestjs/common';

import { WeatherResolver } from './weather.resolver';
import { WeatherService } from './weather.service';

@Module({
  imports: [],
  providers: [WeatherResolver, WeatherService],
  exports: [WeatherService],
})
export class WeatherModule {}
