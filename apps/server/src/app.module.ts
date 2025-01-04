import { join } from 'path';

import { RedisModule } from '@liaoliaots/nestjs-redis';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './dogs/dog.module';
import { REDIS_DB, REDIS_HOST, REDIS_PORT } from './utils/env';
import { FirebaseModule } from './utils/firebase/firebase.module';
import { WeatherModule } from './weather/weather.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
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
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
        transport: {
          targets: [
            {
              level: 'debug',
              target: 'pino-pretty',
              options: {
                singleLine: true,
              },
            },
            {
              level: 'error',
              target: 'pino-pretty',
            },
          ],
        },
      },
    }),

    DogModule,
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
