import { WEATHER_UNITS } from '@furcast/core';
import { ArgsType, Field, Float } from '@nestjs/graphql';

@ArgsType()
export class GetWeatherArgs {
  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;

  @Field(() => String, { nullable: true })
  units: WEATHER_UNITS = WEATHER_UNITS.METRIC;
}
