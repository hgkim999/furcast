import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';

const HEADER_HEIGHT = 700;

type Props = PropsWithChildren<{
  headerHeight?: number;
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  headerComponent?: ReactNode;
}> &
  React.ComponentProps<typeof Animated.ScrollView>;

export default function ParallaxScrollView({
  children,
  headerHeight = HEADER_HEIGHT,
  headerImage,
  headerBackgroundColor,
  headerComponent,
  ...rest
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-headerHeight, 0, headerHeight],
            [-headerHeight / 2, 0, headerHeight * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-headerHeight, 0, headerHeight],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  return (
    <ThemedView className="flex-1">
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}
        {...rest}
      >
        <Animated.View
          className={`overflow-hidden`}
          style={[
            { height: headerHeight },
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          <>
            {headerImage}
            {headerComponent}
          </>
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
