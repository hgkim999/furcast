import React from 'react';

import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { Text as RNText, StyleSheet } from 'react-native';
import { textStyle } from './styles';
import { cn } from '../../../utils/classNames';
import {
  DEFAULT_TEXT_SHADOW_COLOR,
  DEFAULT_TEXT_SHADOW_RADIUS,
} from './index.web';

type ITextProps = React.ComponentProps<typeof RNText> &
  VariantProps<typeof textStyle> & {};

const Text = React.forwardRef<React.ElementRef<typeof RNText>, ITextProps>(
  (
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size = 'md',
      sub,
      italic,
      highlight,
      ...props
    },
    ref,
  ) => {
    const classes =
      className?.split(' ').reduce(
        (prev, value) => {
          prev[value] = true;
          return prev;
        },
        {} as Record<string, boolean>,
      ) || {};
    return (
      <RNText
        className={cn(
          textStyle({
            isTruncated,
            bold,
            underline,
            strikeThrough,
            size,
            sub,
            italic,
            highlight,
          }),
          className,
        )}
        style={[props.style, classes['text-shadow'] && styles.textShadow]}
        {...props}
        ref={ref}
      />
    );
  },
);

Text.displayName = 'Text';

const styles = StyleSheet.create({
  textShadow: {
    textShadowRadius: DEFAULT_TEXT_SHADOW_RADIUS,
    textShadowColor: DEFAULT_TEXT_SHADOW_COLOR,
    textShadowOffset: { width: 0, height: 0 },
  },
});

export { Text };
