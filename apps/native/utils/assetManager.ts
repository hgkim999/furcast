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
  GOLDEN_RETRIEVER = 'Golden Retriever',
  HUSKY = 'Husky',
  LABRADOR = 'Labrador',
  POODLE = 'Poodle',
  JINDO = 'Jindo',
  MALTESE = 'Maltese',
}

export const DogImageSource: Record<DogImageName, any> = {
  [DogImageName.COLLIE]: require('@/assets/images/dogs/collie.png'),
  [DogImageName.GERMAN_SHEPHERD]: require('@/assets/images/dogs/german-shepherd.png'),
  [DogImageName.GOLDEN_RETRIEVER]: require('@/assets/images/dogs/golden-raincoat.png'),
  [DogImageName.HUSKY]: require('@/assets/images/dogs/husky-scarf.png'),
  [DogImageName.LABRADOR]: require('@/assets/images/dogs/labrador.png'),
  [DogImageName.POODLE]: require('@/assets/images/dogs/poodle.png'),
  [DogImageName.JINDO]: require('@/assets/images/dogs/jindo.png'),
  [DogImageName.MALTESE]: require('@/assets/images/dogs/maltese.png'),
};

export const getRandomDogImage = (): any => {
  const dogImages = Object.values(DogImageSource);
  return dogImages[Math.floor(Math.random() * dogImages.length)];
};
