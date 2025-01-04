import { ArgsType, Field, Float } from '@nestjs/graphql';

@ArgsType()
export class GetWeatherArgs {
  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;
}
