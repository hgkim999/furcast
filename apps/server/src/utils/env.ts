import { config } from 'dotenv';
import pino from 'pino';

export const IS_DEV = process.env.NODE_ENV !== 'production';

if (IS_DEV) {
  config({ path: '.env.development' });
}

config();

const logger: pino.Logger = pino();

function checkVariable<T>(name: string, value: T | null | undefined): T {
  if (value === null || typeof value === 'undefined') {
    logger.error(
      `Environment variable ${name} is not defined. Please define it in your .env file.`,
    );
  } else if (Number.isNaN(value)) {
    logger.error(
      `Environment variable ${name} should be a number but it was NaN.`,
    );
  }

  return value!;
}

export const DB_HOST = checkVariable('DB_HOST', process.env.DB_HOST);
export const DB_PORT = checkVariable('DB_PORT', parseInt(process.env.DB_PORT!));
export const DB_USERNAME = checkVariable(
  'DB_USERNAME',
  process.env.DB_USERNAME,
);
export const DB_PASSWORD = checkVariable(
  'DB_PASSWORD',
  process.env.DB_PASSWORD,
);
export const DB_DATABASE = checkVariable(
  'DB_DATABASE',
  process.env.DB_DATABASE,
);

export const APP_HOST = checkVariable('APP_HOST', process.env.APP_HOST);
export const APP_ENDPOINT = process.env.APP_ENDPOINT || `https://${APP_HOST}`;

export const OPENWEATHER_API_KEY = checkVariable(
  'OPENWEATHER_API_KEY',
  process.env.OPENWEATHER_API_KEY,
);
