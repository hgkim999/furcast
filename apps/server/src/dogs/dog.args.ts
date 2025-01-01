import { IsOptional } from 'class-validator';

import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class DogArgs {
  @Field(() => ID)
  id: string;
}

@ArgsType()
export class AddDogArgs {
  @Field(() => String)
  name: string;

  @Field(() => String)
  @IsOptional()
  breed: string;

  @Field(() => Number)
  @IsOptional()
  age: number;
}
