import * as admin from 'firebase-admin';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseService {
  constructor(private readonly configService: ConfigService) {
    const firebaseConfig = JSON.parse(
      this.configService.get<string>('FIREBASE_CONFIG'),
    );
    const serviceAccount = JSON.parse(
      this.configService.get<string>('FIREBASE_SERVICE_ACCOUNT'),
    );

    if (!admin.apps.length) {
      admin.initializeApp({
        ...firebaseConfig,
        credential: admin.credential.cert(serviceAccount),
      });

      console.log('Firebase initialized', admin.apps);
    }
  }

  getAuth() {
    return admin.auth();
  }

  getFirestore() {
    return admin.firestore();
  }

  getStorage() {
    return admin.storage();
  }
}
