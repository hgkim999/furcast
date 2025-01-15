import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WeatherOverview {
  @Field()
  lat: number;

  @Field()
  lon: number;

  @Field()
  tz: string;

  @Field()
  date: string;

  @Field()
  units: string;

  @Field()
  weather_overview: string;
}
