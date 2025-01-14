import { OPENWEATHER_WEATHER_CONDITIONS } from './openweather';

export enum WEATHER_UNITS {
  IMPERIAL = 'imperial',
  METRIC = 'metric',
  STANDARD = 'standard',
}

export enum WEATHER_TYPES {
  THUNDERSTORM = 'Thunderstorm',
  DRIZZLE = 'Drizzle',
  RAIN = 'Rain',
  SNOW = 'Snow',
  CLEAR = 'Clear',
  CLOUDS = 'Clouds',
  MIST = 'Mist',
  SMOKE = 'Smoke',
  HAZE = 'Haze',
  DUST = 'Dust',
  FOG = 'Fog',
  SAND = 'Sand',
  ASH = 'Ash',
  SQUALL = 'Squall',
  TORNADO = 'Tornado',
}

export const WEATHER_OPENWEATHER_MAP: Record<
  keyof typeof OPENWEATHER_WEATHER_CONDITIONS,
  WEATHER_TYPES
> = {
  200: WEATHER_TYPES.THUNDERSTORM,
  201: WEATHER_TYPES.THUNDERSTORM,
  202: WEATHER_TYPES.THUNDERSTORM,
  210: WEATHER_TYPES.THUNDERSTORM,
  211: WEATHER_TYPES.THUNDERSTORM,
  212: WEATHER_TYPES.THUNDERSTORM,
  221: WEATHER_TYPES.THUNDERSTORM,
  230: WEATHER_TYPES.THUNDERSTORM,
  231: WEATHER_TYPES.THUNDERSTORM,
  300: WEATHER_TYPES.DRIZZLE,
  301: WEATHER_TYPES.DRIZZLE,
  302: WEATHER_TYPES.DRIZZLE,
  310: WEATHER_TYPES.DRIZZLE,
  311: WEATHER_TYPES.DRIZZLE,
  312: WEATHER_TYPES.DRIZZLE,
  313: WEATHER_TYPES.DRIZZLE,
  314: WEATHER_TYPES.DRIZZLE,
  321: WEATHER_TYPES.DRIZZLE,
  500: WEATHER_TYPES.RAIN,
  501: WEATHER_TYPES.RAIN,
  502: WEATHER_TYPES.RAIN,
  503: WEATHER_TYPES.RAIN,
  504: WEATHER_TYPES.RAIN,
  511: WEATHER_TYPES.RAIN,
  520: WEATHER_TYPES.RAIN,
  521: WEATHER_TYPES.RAIN,
  600: WEATHER_TYPES.SNOW,
  601: WEATHER_TYPES.SNOW,
  602: WEATHER_TYPES.SNOW,
  611: WEATHER_TYPES.SNOW,
  612: WEATHER_TYPES.SNOW,
  613: WEATHER_TYPES.SNOW,
  615: WEATHER_TYPES.SNOW,
  616: WEATHER_TYPES.SNOW,
  620: WEATHER_TYPES.SNOW,
  621: WEATHER_TYPES.SNOW,
  622: WEATHER_TYPES.SNOW,
  701: WEATHER_TYPES.MIST,
  711: WEATHER_TYPES.SMOKE,
  721: WEATHER_TYPES.HAZE,
  731: WEATHER_TYPES.DUST,
  741: WEATHER_TYPES.FOG,
  751: WEATHER_TYPES.SAND,
  761: WEATHER_TYPES.DUST,
  762: WEATHER_TYPES.ASH,
  771: WEATHER_TYPES.SQUALL,
  781: WEATHER_TYPES.TORNADO,
  800: WEATHER_TYPES.CLEAR,
  801: WEATHER_TYPES.CLOUDS,
  802: WEATHER_TYPES.CLOUDS,
  803: WEATHER_TYPES.CLOUDS,
  804: WEATHER_TYPES.CLOUDS,
};

export function getRandomWeatherCode(): keyof typeof OPENWEATHER_WEATHER_CONDITIONS {
  const keys = Object.keys(OPENWEATHER_WEATHER_CONDITIONS).map((key) =>
    parseInt(key),
  );
  return (
    keys[Math.floor(Math.random() * keys.length)] ??
    (800 as keyof typeof OPENWEATHER_WEATHER_CONDITIONS)
  );
}

export function getRandomWeatherType(): WEATHER_TYPES {
  const values = Object.values(WEATHER_TYPES);
  return values[Math.floor(Math.random() * values.length)] as WEATHER_TYPES;
}

export type TestWeatherInfo = {
  weather: {
    conditionId: keyof typeof OPENWEATHER_WEATHER_CONDITIONS;
    main: WEATHER_TYPES;
  };
};
