import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Coordinate {
  constructor(lat: number, lon: number) {
    this.lat = lat;
    this.lon = lon;
  }

  @Field(() => Float)
  lat!: number;

  @Field(() => Float)
  lon!: number;
}
