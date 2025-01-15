/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A valid ISO-8601 DateTime scalar */
  DateTime: { input: string; output: string; }
};

export type Dog = {
  __typename?: 'Dog';
  age: Scalars['Float']['output'];
  breed?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addDog: Dog;
};


export type MutationAddDogArgs = {
  age: Scalars['Float']['input'];
  breed: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  dog: Dog;
  location: Scalars['String']['output'];
  overview: WeatherOverview;
  weather: WeatherInfo;
};


export type QueryDogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLocationArgs = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
  units?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOverviewArgs = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
  units?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWeatherArgs = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
  units?: InputMaybe<Scalars['String']['input']>;
};

export type WeatherDetailInfo = {
  __typename?: 'WeatherDetailInfo';
  clouds: Scalars['Int']['output'];
  conditionId: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  feelsLike: WeatherDetailInfoFeelsLike;
  humidity: Scalars['Int']['output'];
  icon: WeatherDetailInfoIcon;
  main: Scalars['String']['output'];
  pressure: Scalars['Int']['output'];
  rain: Scalars['Int']['output'];
  snow: Scalars['Int']['output'];
  temp: WeatherDetailInfoTemp;
  visibility: Scalars['Int']['output'];
  wind: WeatherDetailInfoWind;
};

export type WeatherDetailInfoFeelsLike = {
  __typename?: 'WeatherDetailInfoFeelsLike';
  cur: Scalars['Float']['output'];
};

export type WeatherDetailInfoIcon = {
  __typename?: 'WeatherDetailInfoIcon';
  raw: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type WeatherDetailInfoTemp = {
  __typename?: 'WeatherDetailInfoTemp';
  cur: Scalars['Float']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
};

export type WeatherDetailInfoWind = {
  __typename?: 'WeatherDetailInfoWind';
  deg: Scalars['Int']['output'];
  speed: Scalars['Float']['output'];
};

export type WeatherInfo = {
  __typename?: 'WeatherInfo';
  astronomical?: Maybe<WeatherInfoAstronomical>;
  dt: Scalars['DateTime']['output'];
  dtRaw?: Maybe<Scalars['Int']['output']>;
  lat: Scalars['Float']['output'];
  lon: Scalars['Float']['output'];
  timezone: Scalars['String']['output'];
  timezoneOffset: Scalars['Int']['output'];
  weather: WeatherDetailInfo;
};

export type WeatherInfoAstronomical = {
  __typename?: 'WeatherInfoAstronomical';
  sunrise?: Maybe<Scalars['DateTime']['output']>;
  sunriseRaw?: Maybe<Scalars['Int']['output']>;
  sunset?: Maybe<Scalars['DateTime']['output']>;
  sunsetRaw?: Maybe<Scalars['Int']['output']>;
};

export type WeatherOverview = {
  __typename?: 'WeatherOverview';
  date: Scalars['String']['output'];
  lat: Scalars['Float']['output'];
  lon: Scalars['Float']['output'];
  tz: Scalars['String']['output'];
  units: Scalars['String']['output'];
  weather_overview: Scalars['String']['output'];
};

export type UseCurrentWeatherInfo_WeatherQueryVariables = Exact<{
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
}>;


export type UseCurrentWeatherInfo_WeatherQuery = { __typename?: 'Query', location: string, weather: { __typename?: 'WeatherInfo', dt: string, lat: number, lon: number, timezoneOffset: number, astronomical?: { __typename?: 'WeatherInfoAstronomical', sunrise?: string | null, sunset?: string | null } | null, weather: { __typename?: 'WeatherDetailInfo', conditionId: number, description: string, main: string, pressure: number, rain: number, snow: number, visibility: number, feelsLike: { __typename?: 'WeatherDetailInfoFeelsLike', cur: number }, icon: { __typename?: 'WeatherDetailInfoIcon', url: string, raw: string }, temp: { __typename?: 'WeatherDetailInfoTemp', cur: number, min: number, max: number }, wind: { __typename?: 'WeatherDetailInfoWind', deg: number, speed: number } } } };

export type UseWeatherOverview_WeatherQueryVariables = Exact<{
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
}>;


export type UseWeatherOverview_WeatherQuery = { __typename?: 'Query', overview: { __typename?: 'WeatherOverview', lat: number, lon: number, tz: string, date: string, units: string, weather_overview: string } };


export const UseCurrentWeatherInfo_WeatherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"useCurrentWeatherInfo_weather"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lat"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lon"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weather"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lat"}}},{"kind":"Argument","name":{"kind":"Name","value":"lon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lon"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"astronomical"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sunrise"}},{"kind":"Field","name":{"kind":"Name","value":"sunset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dt"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"timezoneOffset"}},{"kind":"Field","name":{"kind":"Name","value":"weather"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conditionId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"feelsLike"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cur"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"main"}},{"kind":"Field","name":{"kind":"Name","value":"pressure"}},{"kind":"Field","name":{"kind":"Name","value":"rain"}},{"kind":"Field","name":{"kind":"Name","value":"snow"}},{"kind":"Field","name":{"kind":"Name","value":"temp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cur"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"wind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deg"}},{"kind":"Field","name":{"kind":"Name","value":"speed"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lat"}}},{"kind":"Argument","name":{"kind":"Name","value":"lon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lon"}}}]}]}}]} as unknown as DocumentNode<UseCurrentWeatherInfo_WeatherQuery, UseCurrentWeatherInfo_WeatherQueryVariables>;
export const UseWeatherOverview_WeatherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"useWeatherOverview_weather"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lat"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lon"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"overview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lat"}}},{"kind":"Argument","name":{"kind":"Name","value":"lon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lon"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}},{"kind":"Field","name":{"kind":"Name","value":"tz"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"units"}},{"kind":"Field","name":{"kind":"Name","value":"weather_overview"}}]}}]}}]} as unknown as DocumentNode<UseWeatherOverview_WeatherQuery, UseWeatherOverview_WeatherQueryVariables>;