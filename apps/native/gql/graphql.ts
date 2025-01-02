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
  weather: Scalars['String']['output'];
};


export type QueryDogArgs = {
  id: Scalars['ID']['input'];
};

export type MainTab_WeatherQueryVariables = Exact<{ [key: string]: never; }>;


export type MainTab_WeatherQuery = { __typename?: 'Query', weather: string };

export type WeatherButton_WeatherQueryVariables = Exact<{ [key: string]: never; }>;


export type WeatherButton_WeatherQuery = { __typename?: 'Query', weather: string };


export const MainTab_WeatherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"mainTab_weather"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weather"}}]}}]} as unknown as DocumentNode<MainTab_WeatherQuery, MainTab_WeatherQueryVariables>;
export const WeatherButton_WeatherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WeatherButton_weather"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weather"}}]}}]} as unknown as DocumentNode<WeatherButton_WeatherQuery, WeatherButton_WeatherQueryVariables>;