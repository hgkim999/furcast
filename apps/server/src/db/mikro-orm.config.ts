import { DataloaderType, Platform, TextType, Type } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations';
import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';

import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from '../utils/env.js';

export const mikroOrmConfig: Options = {
  entities: [],

  // Ideally, we would use `TsMorphMetadataProvider`, but it does not work when
  // using a bundler.
  //
  // https://mikro-orm.io/docs/deployment/#deploy-a-bundle-of-entities-and-dependencies-with-webpack
  //
  // `disableDynamicFileAccess` is not actually necessary even though it is
  // recommended in the docs. See
  // https://github.com/mikro-orm/mikro-orm/issues/4181#issuecomment-1489894873.
  discovery: {
    getMappedType(type: string, platform: Platform) {
      // Change default column type from `VARCHAR(n)` to `TEXT`
      // For explanation about 'any' see https://github.com/mikro-orm/mikro-orm/discussions/5098
      if (type === 'string' || type === 'any') {
        return Type.getType(TextType);
      }

      return platform.getDefaultMappedType(type);
    },
  },

  driver: PostgreSqlDriver,
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  dbName: DB_DATABASE,

  dataloader: DataloaderType.ALL,
  debug: true,

  extensions: [Migrator],

  migrations: {
    snapshot: false,
    tableName: 'migration',
    path: './dist/db/migrations',
    pathTs: './src/db/migrations',
  },
};

export default mikroOrmConfig;
