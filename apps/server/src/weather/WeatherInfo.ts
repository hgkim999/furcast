import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { DateTime } from 'src/utils/apollo/DateTimeScalarType';

@ObjectType()
export class WeatherInfoAstronomical {
  @Field(() => DateTime, { nullable: true })
  sunrise?: Date;

  @Field(() => Int, { nullable: true })
  sunriseRaw?: number;

  @Field(() => DateTime, { nullable: true })
  sunset?: Date;

  @Field(() => Int, { nullable: true })
  sunsetRaw?: number;
}

@ObjectType()
export class WeatherDetailInfoFeelsLike {
  @Field(() => Float)
  cur: number;
}

@ObjectType()
export class WeatherDetailInfoIcon {
  @Field(() => String)
  url: string;

  @Field(() => String)
  raw: string;
}

@ObjectType()
export class WeatherDetailInfoTemp {
  @Field(() => Float)
  cur: number;

  @Field(() => Float)
  min: number;

  @Field(() => Float)
  max: number;
}

@ObjectType()
export class WeatherDetailInfoWind {
  @Field(() => Int)
  deg: number;

  @Field(() => Float)
  speed: number;
}

@ObjectType()
export class WeatherDetailInfo {
  @Field(() => Int)
  clouds: number;

  @Field(() => Int)
  conditionId: number;

  @Field(() => String)
  description: string;

  @Field(() => WeatherDetailInfoFeelsLike)
  feelsLike: WeatherDetailInfoFeelsLike;

  @Field(() => Int)
  humidity: number;

  @Field(() => WeatherDetailInfoIcon)
  icon: WeatherDetailInfoIcon;

  @Field(() => String)
  main: string;

  @Field(() => Int)
  pressure: number;

  @Field(() => Int)
  rain: number;

  @Field(() => Int)
  snow: number;

  @Field(() => WeatherDetailInfoTemp)
  temp: WeatherDetailInfoTemp;

  @Field(() => Int)
  visibility: number;

  @Field(() => WeatherDetailInfoWind)
  wind: WeatherDetailInfoWind;
}

@ObjectType()
export class WeatherInfo {
  @Field(() => WeatherInfoAstronomical, { nullable: true })
  astronomical: WeatherInfoAstronomical | null;

  @Field(() => DateTime)
  dt: Date;

  @Field(() => Int, { nullable: true })
  dtRaw: number;

  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;

  @Field(() => Int)
  timezoneOffset: number;

  @Field(() => String)
  timezone: string;

  @Field(() => WeatherDetailInfo)
  weather: WeatherDetailInfo;
}
