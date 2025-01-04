import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from '@/components/ui/image';
import { LinearGradient } from '@/components/ui/linear-gradient';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { graphql } from '@/gql';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import { useLocation } from '@/hooks/useLocation';
import React, { useMemo } from 'react';
import { HStack } from '@/components/ui/hstack';

const weatherQuery = graphql(`
  query mainTab_weather($lat: Float!, $lon: Float!) {
    weather(lat: $lat, lon: $lon)
    location(lat: $lat, lon: $lon)
  }
`);

const RAINY_IMAGE = require('@/assets/images/backgrounds/rainy.png');
const LOADING_IMAGE = require('@/assets/images/backgrounds/loading.png');

export default function HomeScreen() {
  const { location } = useLocation();
  const apolloClient = useApolloClient();

  const { data, loading, error } = useQuery(weatherQuery, {
    variables: {
      lat: location?.coords?.latitude ?? 0,
      lon: location?.coords?.longitude ?? 0,
    },
    fetchPolicy: 'cache-and-network',
    skip: !location?.coords,
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

  const weatherInfo = useMemo(() => {
    if (data?.weather) {
      return JSON.parse(data.weather);
    }
    return null;
  }, [data]);

  const locationName = useMemo(() => {
    if (data?.location) {
      return data.location;
    }
    return null;
  }, [data]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          alt="Furcast Loading"
          source={loading ? LOADING_IMAGE : RAINY_IMAGE}
          className="h-full w-full"
        />
      }
    >
      {loading && <ThemedText>Loading...</ThemedText>}
      {weatherInfo && (
        <>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="title">{locationName}</ThemedText>
            <ThemedText type="subtitle">Current weather</ThemedText>
            <HStack className="items-center">
              <Image source={weatherInfo.weather.icon.url} />
              <ThemedText>{weatherInfo.weather?.main}</ThemedText>
            </HStack>
          </ThemedView>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Temperature</ThemedText>
            <ThemedText>
              {Math.round(weatherInfo.weather.temp.cur - 273.15)}°C
            </ThemedText>
          </ThemedView>
        </>
      )}
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
