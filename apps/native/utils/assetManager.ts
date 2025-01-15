import {
  OPENWEATHER_WEATHER_CONDITIONS,
  WEATHER_OPENWEATHER_MAP,
  WEATHER_TYPES,
} from '@furcast/core';

export enum WeatherImageName {
  CLEAR = 'Clear',
  CLOUDS = 'Clouds',
  DRIZZLE = 'Drizzle',
  FOG = 'Fog',
  RAIN = 'Rain',
  SNOW = 'Snow',
  THUNDERSTORM = 'Thunderstorm',
  WINDY = 'Windy',
}

export const WeatherImageSource: Record<WeatherImageName, any> = {
  [WeatherImageName.CLEAR]: require('@/assets/images/weathers/clear.png'),
  [WeatherImageName.CLOUDS]: require('@/assets/images/weathers/clouds.png'),
  [WeatherImageName.DRIZZLE]: require('@/assets/images/weathers/drizzle.png'),
  [WeatherImageName.FOG]: require('@/assets/images/weathers/fog.png'),
  [WeatherImageName.RAIN]: require('@/assets/images/weathers/rain.png'),
  [WeatherImageName.SNOW]: require('@/assets/images/weathers/snow.png'),
  [WeatherImageName.THUNDERSTORM]: require('@/assets/images/weathers/thunderstorm.png'),
  [WeatherImageName.WINDY]: require('@/assets/images/weathers/windy.png'),
};

export const getRandomWeatherImage = (): any => {
  const weatherImages = Object.values(WeatherImageSource);
  return weatherImages[Math.floor(Math.random() * weatherImages.length)];
};

export enum DogImageName {
  COLLIE = 'Border Collie',
  GERMAN_SHEPHERD = 'German Shepherd',
  GOLDEN_RETRIEVER_RAINCOAT = 'Golden Retriever',
  HUSKY = 'Husky',
  LABRADOR = 'Labrador',
  POODLE = 'Poodle',
  JINDO = 'Jindo',
  MALTESE = 'Maltese',
  SEARCHING = 'Searching',
}

export const DogImageSource: Record<DogImageName, any> = {
  [DogImageName.COLLIE]: require('@/assets/images/dogs/collie.png'),
  [DogImageName.GERMAN_SHEPHERD]: require('@/assets/images/dogs/german-shepherd.png'),
  [DogImageName.GOLDEN_RETRIEVER_RAINCOAT]: require('@/assets/images/dogs/golden-raincoat.png'),
  [DogImageName.HUSKY]: require('@/assets/images/dogs/husky-scarf.png'),
  [DogImageName.LABRADOR]: require('@/assets/images/dogs/labrador.png'),
  [DogImageName.POODLE]: require('@/assets/images/dogs/poodle.png'),
  [DogImageName.JINDO]: require('@/assets/images/dogs/jindo.png'),
  [DogImageName.MALTESE]: require('@/assets/images/dogs/maltese.png'),
  [DogImageName.SEARCHING]: require('@/assets/images/dogs/searching.png'),
};

export const getRandomDogImage = (): any => {
  const dogImages = Object.values(DogImageSource);
  return dogImages[Math.floor(Math.random() * dogImages.length)];
};

export type AssetMapValue = {
  weatherImage: any;
  dogImage: any[];
};

const WEATHER_TYPE_TO_ASSET_MAP: Record<
  WEATHER_TYPES | 'DEFAULT',
  AssetMapValue
> = {
  [WEATHER_TYPES.CLEAR]: {
    weatherImage: WeatherImageSource[WeatherImageName.CLEAR],
    dogImage: [
      DogImageSource[DogImageName.COLLIE],
      DogImageSource[DogImageName.GERMAN_SHEPHERD],
      DogImageSource[DogImageName.JINDO],
      DogImageSource[DogImageName.MALTESE],
      DogImageSource[DogImageName.POODLE],
      DogImageSource[DogImageName.LABRADOR],
    ],
  },
  [WEATHER_TYPES.CLOUDS]: {
    weatherImage: WeatherImageSource[WeatherImageName.CLOUDS],
    dogImage: [
      DogImageSource[DogImageName.COLLIE],
      DogImageSource[DogImageName.GERMAN_SHEPHERD],
      DogImageSource[DogImageName.JINDO],
      DogImageSource[DogImageName.MALTESE],
      DogImageSource[DogImageName.POODLE],
      DogImageSource[DogImageName.LABRADOR],
    ],
  },
  [WEATHER_TYPES.DRIZZLE]: {
    weatherImage: WeatherImageSource[WeatherImageName.DRIZZLE],
    dogImage: [DogImageSource[DogImageName.GOLDEN_RETRIEVER_RAINCOAT]],
  },
  [WEATHER_TYPES.FOG]: {
    weatherImage: WeatherImageSource[WeatherImageName.FOG],
    dogImage: [
      DogImageSource[DogImageName.COLLIE],
      DogImageSource[DogImageName.GERMAN_SHEPHERD],
      DogImageSource[DogImageName.JINDO],
      DogImageSource[DogImageName.MALTESE],
      DogImageSource[DogImageName.POODLE],
      DogImageSource[DogImageName.LABRADOR],
    ],
  },
  [WEATHER_TYPES.HAZE]: {
    weatherImage: WeatherImageSource[WeatherImageName.FOG],
    dogImage: [
      DogImageSource[DogImageName.COLLIE],
      DogImageSource[DogImageName.GERMAN_SHEPHERD],
      DogImageSource[DogImageName.JINDO],
      DogImageSource[DogImageName.MALTESE],
      DogImageSource[DogImageName.POODLE],
      DogImageSource[DogImageName.LABRADOR],
    ],
  },
  [WEATHER_TYPES.SMOKE]: {
    weatherImage: WeatherImageSource[WeatherImageName.FOG],
    dogImage: [
      DogImageSource[DogImageName.COLLIE],
      DogImageSource[DogImageName.GERMAN_SHEPHERD],
      DogImageSource[DogImageName.JINDO],
      DogImageSource[DogImageName.MALTESE],
      DogImageSource[DogImageName.POODLE],
      DogImageSource[DogImageName.LABRADOR],
    ],
  },
  [WEATHER_TYPES.DUST]: {
    weatherImage: WeatherImageSource[WeatherImageName.FOG],
    dogImage: [
      DogImageSource[DogImageName.COLLIE],
      DogImageSource[DogImageName.GERMAN_SHEPHERD],
      DogImageSource[DogImageName.JINDO],
      DogImageSource[DogImageName.MALTESE],
      DogImageSource[DogImageName.POODLE],
      DogImageSource[DogImageName.LABRADOR],
    ],
  },
  [WEATHER_TYPES.SAND]: {
    weatherImage: WeatherImageSource[WeatherImageName.FOG],
    dogImage: [
      DogImageSource[DogImageName.COLLIE],
      DogImageSource[DogImageName.GERMAN_SHEPHERD],
      DogImageSource[DogImageName.JINDO],
      DogImageSource[DogImageName.MALTESE],
      DogImageSource[DogImageName.POODLE],
      DogImageSource[DogImageName.LABRADOR],
    ],
  },
  [WEATHER_TYPES.ASH]: {
    weatherImage: WeatherImageSource[WeatherImageName.FOG],
    dogImage: [
      DogImageSource[DogImageName.COLLIE],
      DogImageSource[DogImageName.GERMAN_SHEPHERD],
      DogImageSource[DogImageName.JINDO],
      DogImageSource[DogImageName.MALTESE],
      DogImageSource[DogImageName.POODLE],
      DogImageSource[DogImageName.LABRADOR],
    ],
  },
  [WEATHER_TYPES.RAIN]: {
    weatherImage: WeatherImageSource[WeatherImageName.RAIN],
    dogImage: [DogImageSource[DogImageName.GOLDEN_RETRIEVER_RAINCOAT]],
  },
  [WEATHER_TYPES.SNOW]: {
    weatherImage: WeatherImageSource[WeatherImageName.SNOW],
    dogImage: [DogImageSource[DogImageName.HUSKY]],
  },
  [WEATHER_TYPES.THUNDERSTORM]: {
    weatherImage: WeatherImageSource[WeatherImageName.THUNDERSTORM],
    dogImage: [DogImageSource[DogImageName.GOLDEN_RETRIEVER_RAINCOAT]],
  },
  [WEATHER_TYPES.TORNADO]: {
    weatherImage: WeatherImageSource[WeatherImageName.WINDY],
    dogImage: [DogImageSource[DogImageName.GOLDEN_RETRIEVER_RAINCOAT]],
  },
  [WEATHER_TYPES.SQUALL]: {
    weatherImage: WeatherImageSource[WeatherImageName.WINDY],
    dogImage: [DogImageSource[DogImageName.GOLDEN_RETRIEVER_RAINCOAT]],
  },
  [WEATHER_TYPES.MIST]: {
    weatherImage: WeatherImageSource[WeatherImageName.DRIZZLE],
    dogImage: [DogImageSource[DogImageName.GOLDEN_RETRIEVER_RAINCOAT]],
  },
  DEFAULT: {
    weatherImage: WeatherImageSource[WeatherImageName.CLEAR],
    dogImage: [
      DogImageSource[DogImageName.COLLIE],
      DogImageSource[DogImageName.GERMAN_SHEPHERD],
      DogImageSource[DogImageName.JINDO],
      DogImageSource[DogImageName.MALTESE],
      DogImageSource[DogImageName.POODLE],
      DogImageSource[DogImageName.LABRADOR],
    ],
  },
};

export const getAssetsForWeatherType = (weatherType: WEATHER_TYPES) => {
  const assets =
    WEATHER_TYPE_TO_ASSET_MAP[weatherType] ??
    WEATHER_TYPE_TO_ASSET_MAP['DEFAULT'];

  const randomDogImage =
    assets.dogImage[Math.floor(Math.random() * assets.dogImage.length)];

  return {
    weatherImage: assets.weatherImage,
    dogImage: randomDogImage,
  };
};

export const getAssetsForWeatherCode = (
  openWeatherKey: keyof typeof OPENWEATHER_WEATHER_CONDITIONS = 800,
) => {
  const weatherType =
    WEATHER_OPENWEATHER_MAP[openWeatherKey] ?? WEATHER_TYPES.CLEAR;
  return getAssetsForWeatherType(weatherType);
};
