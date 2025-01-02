import { FC } from 'react';

import { graphql } from '@/gql';
import { useQuery } from '@apollo/client';

import { Button } from './ui/button';

interface WeatherButtonProps {}

const weatherQuery = graphql(`
  query WeatherButton_weather {
    weather
  }
`);

const WeatherButton: FC<WeatherButtonProps> = (props) => {
  const useQueryResult = useQuery(weatherQuery);
  const { data, loading } = useQueryResult;

  return <Button>{data?.weather}</Button>;
};

export { WeatherButton };
