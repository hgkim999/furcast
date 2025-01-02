import Constants from 'expo-constants';
import * as Device from 'expo-device';

import { ApolloClient, InMemoryCache } from '@apollo/client';

let uri = process.env.EXPO_PUBLIC_APOLLO_ENDPOINT;

if (Device.deviceType !== Device.DeviceType.DESKTOP) {
  uri = Constants.expoConfig?.hostUri
    ? `http://${Constants.expoConfig.hostUri.replace(/:\d+$/, ':4040/graphql')}`
    : uri;
}

if (process.env.NODE_ENV !== 'production') {
  console.log(`Apollo client is connecting to ${uri}`);
}

// Replace with your GraphQL API endpoint
const apolloClient = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default apolloClient;
