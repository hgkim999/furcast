import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { Image } from '@/components/ui/image';
import { LinearGradient } from '@/components/ui/linear-gradient';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { gql, useApolloClient } from '@apollo/client';
import { useLocation } from '@/hooks/useLocation';
import React, { useEffect, useMemo, useState } from 'react';
import { HStack } from '@/components/ui/hstack';
import {
  DogImageSource,
  getRandomDogImage,
  getRandomWeatherImage,
  WeatherImageSource,
} from '@/utils/assetManager';
import { useCurrentWeatherInfo } from '@/hooks/useCurrentWeatherInfo';
import { Box } from '@/components/ui/box';

export default function HomeScreen() {
  const { location } = useLocation();
  const apolloClient = useApolloClient();
  const [dogImageSource, setDogImageSource] = useState(getRandomDogImage());
  const [weatherImageSource, setWeatherImageSource] = useState(
    getRandomWeatherImage(),
  );

  const { weatherInfo, locationName, queryResult } = useCurrentWeatherInfo({
    location,
  });

  const handleClick = async () => {
    if (location?.coords) {
      const res = await apolloClient.query({
        query: gql`
          query ($lat: Float!, $lon: Float!) {
            weather(lat: $lat, lon: $lon)
          }
        `,
        variables: {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        },
        fetchPolicy: 'no-cache',
      });
      console.log(JSON.parse(res.data.weather));
    }
  };

  const handleClickWeather = () => {
    setWeatherImageSource(getRandomWeatherImage());
  };

  const handleClickDog = () => {
    setDogImageSource(getRandomDogImage());
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Pressable className="h-full" onPress={handleClickWeather}>
          <Image
            alt="Furcast Loading"
            source={weatherImageSource}
            className="h-full w-full"
          />
        </Pressable>
      }
      headerComponent={
        weatherInfo && (
          <Box className="text-shadow-lg text-shadow-blur-md absolute mb-2 h-full w-full items-center justify-center gap-2 bg-transparent text-center">
            <Box className="mb-2 gap-2">
              <Text
                size="2xl"
                className="bold text-shadow-x-0 text-shadow text-shadow-blur-xl text-center text-white"
                style={styles.shadowedText}
              >
                {locationName}
              </Text>
              <HStack className="items-center justify-center">
                <Text
                  className="text-white"
                  shadow="lg"
                  size="5xl"
                  style={styles.shadowedText}
                >
                  {weatherInfo.weather?.main}
                </Text>
              </HStack>
            </Box>
            <Box className="text-shadow-blur-8 text-shadow mb-2 gap-2">
              <Text
                className="text-shadow text-xl text-white"
                style={styles.shadowedText}
              >
                {Math.round(weatherInfo.weather.temp.cur - 273.15)}°C
              </Text>
            </Box>
            <Box className="absolute bottom-4">
              <Pressable onPress={handleClickDog}>
                <Image
                  alt="Furcast Dog"
                  source={dogImageSource}
                  className="h-72 w-36"
                />
              </Pressable>
            </Box>
          </Box>
        )
      }
      headerHeight={800}
    >
      <LinearGradient
        className="items-center rounded-full py-2"
        colors={['#8637CF', '#0F55A1']}
        start={[0, 1]}
        end={[1, 0]}
      >
        <Pressable
          className="w-full cursor-pointer items-center rounded-full"
          onPress={handleClick}
        >
          <Text className="font-semibold text-white">Get weather</Text>
        </Pressable>
      </LinearGradient>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  shadowedText: {
    textShadowRadius: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
  },
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
