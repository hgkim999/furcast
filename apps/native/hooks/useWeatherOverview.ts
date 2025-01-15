import { graphql } from '@/gql';
import { UseCurrentWeatherInfo_WeatherQuery } from '@/gql/graphql';
import { useQuery } from '@apollo/client';
import { LocationObject } from 'expo-location';
import { useMemo } from 'react';

const weatherQuery = graphql(`
  query useWeatherOverview_weather($lat: Float!, $lon: Float!) {
    overview(lat: $lat, lon: $lon) {
      lat
      lon
      tz
      date
      units
      weather_overview
    }
  }
`);

interface UseWeatherOverviewProps {
  location?: LocationObject | null;
}

export const useWeatherOverview = ({ location }: UseWeatherOverviewProps) => {
  const queryResult = useQuery(weatherQuery, {
    variables: {
      lat: location?.coords?.latitude ?? 0,
      lon: location?.coords?.longitude ?? 0,
    },
    fetchPolicy: 'cache-and-network',
    skip: !location?.coords,
  });

  const overview = queryResult.data?.overview;

  return { ...queryResult, overview };
};
