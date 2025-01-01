import { Module } from '@nestjs/common';

import { DogResolver } from './dog.resolver';
import { DogService } from './dog.service';

@Module({
  imports: [],
  controllers: [],
  providers: [DogService, DogResolver],
})
export class DogModule {}
