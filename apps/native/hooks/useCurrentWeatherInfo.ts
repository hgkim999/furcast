import { graphql } from '@/gql';
import { UseCurrentWeatherInfo_WeatherQuery } from '@/gql/graphql';
import { useQuery } from '@apollo/client';
import { LocationObject } from 'expo-location';
import { useMemo } from 'react';

const weatherQuery = graphql(`
  query useCurrentWeatherInfo_weather($lat: Float!, $lon: Float!) {
    weather(lat: $lat, lon: $lon) {
      astronomical {
        sunrise
        sunset
      }
      dt
      lat
      lon
      timezoneOffset
      weather {
        conditionId
        description
        feelsLike {
          cur
        }
        icon {
          url
          raw
        }
        main
        pressure
        rain
        snow
        temp {
          cur
          min
          max
        }
        visibility
        wind {
          deg
          speed
        }
      }
    }
    location(lat: $lat, lon: $lon)
  }
`);

interface UseCurrentWeatherInfoProps {
  location?: LocationObject | null;
}

export const useCurrentWeatherInfo = ({
  location,
}: UseCurrentWeatherInfoProps) => {
  const queryResult = useQuery(weatherQuery, {
    variables: {
      lat: location?.coords?.latitude ?? 0,
      lon: location?.coords?.longitude ?? 0,
    },
    fetchPolicy: 'cache-and-network',
    skip: !location?.coords,
  });

  const weatherInfo = useMemo(() => {
    return queryResult.data?.weather;
  }, [queryResult.data]);

  const locationName = useMemo(() => {
    if (queryResult.data?.location) {
      return queryResult.data.location;
    }
    return null;
  }, [queryResult.data]);

  return { weatherInfo, locationName, queryResult };
};
