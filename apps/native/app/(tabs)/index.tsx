import { RefreshControl, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image } from '@/components/ui/image';
import { LinearGradient } from '@/components/ui/linear-gradient';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { useLocation } from '@/hooks/useLocation';
import React, { useMemo, useState } from 'react';
import { HStack } from '@/components/ui/hstack';
import {
  DogImageName,
  DogImageSource,
  getAssetsForWeatherCode,
  getAssetsForWeatherType,
} from '@/utils/assetManager';
import { useCurrentWeatherInfo } from '@/hooks/useCurrentWeatherInfo';
import { Box } from '@/components/ui/box';
import {
  getRandomWeatherCode,
  getRandomWeatherType,
  TestWeatherInfo,
  WEATHER_OPENWEATHER_MAP,
  WEATHER_TYPES,
} from '@furcast/core';
import { WeatherInfo } from '@/gql/graphql';

export default function HomeScreen() {
  const { location } = useLocation();
  const [testWeatherInfo, setTestWeatherInfo] =
    useState<TestWeatherInfo | null>(null);

  const { weatherInfo, locationName, queryResult } = useCurrentWeatherInfo({
    location,
  });

  const { weatherImage, dogImage } = useMemo(() => {
    return testWeatherInfo
      ? getAssetsForWeatherCode(testWeatherInfo.weather.conditionId)
      : getAssetsForWeatherCode(weatherInfo?.weather.conditionId);
  }, [weatherInfo, testWeatherInfo]);

  const handleClickDog = () => {
    const randomWeatherCode = getRandomWeatherCode();
    setTestWeatherInfo({
      weather: {
        conditionId: randomWeatherCode,
        main: WEATHER_OPENWEATHER_MAP[randomWeatherCode],
      },
    });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          alt="Furcast Loading"
          source={weatherImage}
          className="h-full w-full"
        />
      }
      headerComponent={
        <>
          {!weatherInfo && (
            <Box className="absolute mb-2 h-full w-full items-center justify-center gap-1 bg-transparent text-center">
              <Box className="mb-2">
                <Text
                  size="2xl"
                  className="bold text-shadow px-2 py-1 text-center text-white"
                >
                  {locationName}
                </Text>
                <HStack className="items-center justify-center">
                  <Text
                    className="text-shadow px-2 py-1 text-white"
                    size="5xl"
                  ></Text>
                </HStack>
              </Box>
              <Box className="">
                <Text className="text-shadow px-2 py-1 text-white"></Text>
              </Box>
              <Box className="absolute bottom-0">
                <Image
                  alt="Loading dog"
                  source={DogImageSource[DogImageName.SEARCHING]}
                  className="h-72 w-36"
                />
              </Box>
            </Box>
          )}
          {weatherInfo && (
            <Box className="absolute mb-2 h-full w-full items-center justify-center gap-1 bg-transparent text-center">
              <Box className="mb-2">
                <Text
                  size="2xl"
                  className="bold text-shadow px-2 py-1 text-center text-white"
                >
                  {locationName}
                </Text>
                <HStack className="items-center justify-center">
                  <Text className="text-shadow px-2 py-1 text-white" size="5xl">
                    {(testWeatherInfo ?? weatherInfo).weather?.main}
                  </Text>
                </HStack>
              </Box>
              <Box className="">
                <Text className="text-shadow px-2 py-1 text-white">
                  {Math.round(weatherInfo.weather.temp.cur - 273.15)}°C
                </Text>
              </Box>
              <Box className="absolute bottom-4">
                <Pressable onPress={handleClickDog}>
                  <Image
                    alt="Furcast Dog"
                    source={dogImage}
                    className="h-72 w-36"
                  />
                </Pressable>
              </Box>
            </Box>
          )}
        </>
      }
      headerHeight={800}
      refreshControl={
        <RefreshControl
          refreshing={queryResult.loading}
          onRefresh={async () => {
            console.log('refreshing');
            await queryResult.refetch();
          }}
        />
      }
    >
      <LinearGradient
        className="items-center rounded-full py-2"
        colors={['#8637CF', '#0F55A1']}
        start={[0, 1]}
        end={[1, 0]}
      >
        <Pressable className="w-full cursor-pointer items-center rounded-full">
          <Text className="font-semibold text-white">Get weather</Text>
        </Pressable>
      </LinearGradient>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
