import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Dog } from './Dog';
import { AddDogArgs, DogArgs } from './dog.args';
import { DogService } from './dog.service';

@Resolver(Dog)
export class DogResolver {
  constructor(@Inject() private readonly dogService: DogService) {}

  @Query(() => Dog)
  async dog(@Args() { id }: DogArgs) {
    return null;
  }

  @Mutation(() => Dog)
  async addDog(@Args() { name, breed, age }: AddDogArgs) {
    return null;
  }
}
