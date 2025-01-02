import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Weather {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  breed: string;

  @Field(() => Number, { nullable: true })
  age: number | null;
}
