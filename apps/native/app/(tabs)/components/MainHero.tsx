import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { FC } from 'react';
import { useColorScheme } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

interface MainHeroProps {}

const MAIN_HERO_HEIGHT = 700;

const MainHero: FC<MainHeroProps> = (props) => {
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
            [-MAIN_HERO_HEIGHT, 0, MAIN_HERO_HEIGHT],
            [-MAIN_HERO_HEIGHT / 2, 0, MAIN_HERO_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-MAIN_HERO_HEIGHT, 0, MAIN_HERO_HEIGHT],
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
      >
        <Animated.View
          className={`h-[${MAIN_HERO_HEIGHT}px] overflow-hidden`}
          style={[headerAnimatedStyle]}
        ></Animated.View>
      </Animated.ScrollView>
    </ThemedView>
  );
};

export { MainHero };
