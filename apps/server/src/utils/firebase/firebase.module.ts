import * as admin from 'firebase-admin';

// firebase.module.ts
import { Module } from '@nestjs/common';
import {
  ConfigModule,
  ConfigService,
} from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'FirebaseAdmin',
      useFactory: async (configService: ConfigService) => {
        const serviceAccount = require(
          configService.get('FIREBASE_SERVICE_ACCOUNT_PATH'),
        );
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
        return admin;
      },
      inject: [ConfigService],
    },
  ],
  exports: ['FirebaseAdmin'],
})
export class FirebaseModule {}
