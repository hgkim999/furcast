import { IsOptional } from 'class-validator';

import { Entity } from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Dog {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  breed: string;

  @Field(() => Number, { nullable: false })
  @IsOptional()
  age: number;
}
