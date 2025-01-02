import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from '@/components/ui/image';
import { LinearGradient } from '@/components/ui/linear-gradient';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { WeatherButton } from '@/components/WeatherButton';
import { graphql } from '@/gql';
import { gql, useApolloClient, useQuery } from '@apollo/client';

const weatherQuery = graphql(`
  query mainTab_weather {
    weather
  }
`);

export default function HomeScreen() {
  const { data, loading } = useQuery(weatherQuery);
  const apolloClient = useApolloClient();

  const handleClick = async () => {
    const res = await apolloClient.query({
      query: gql`
        query {
          weather
        }
      `,
    });
    console.log(res.data.weather);

    console.log(process.env.EXPO_PUBLIC_APOLLO_ENDPOINT);
  };

  console.log({ data });
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          alt="Furcast Loading"
          source={require('@/assets/images/backgrounds/loading.png')}
          className="h-full w-full"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
        <WeatherButton />
      </ThemedView>
      <Pressable
        className="w-full cursor-pointer items-center rounded-full py-2"
        onPress={handleClick}
      >
        <LinearGradient
          colors={['#8637CF', '#0F55A1']}
          start={[0, 1]}
          end={[1, 0]}
        >
          <Text className="font-semibold text-white">Subscribe</Text>
        </LinearGradient>
      </Pressable>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{' '}
          to see changes. Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{' '}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{' '}
          directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
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
