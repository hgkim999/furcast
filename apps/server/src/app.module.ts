import { join } from 'path';

import { RedisModule } from '@liaoliaots/nestjs-redis';
import {
  ApolloDriver,
  ApolloDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './dogs/dog.module';
import {
  REDIS_DB,
  REDIS_HOST,
  REDIS_PORT,
} from './utils/env';
import { FirebaseModule } from './utils/firebase/firebase.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development', '.env.development.local'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      autoSchemaFile: join(
        process.cwd(),
        '../../packages/core/graphql/schema.gql',
      ),
      introspection: true,
      sortSchema: true,
    }),
    RedisModule.forRoot({
      config: {
        host: REDIS_HOST,
        port: REDIS_PORT,
        db: REDIS_DB,
      },
    }),

    FirebaseModule,

    DogModule,
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
