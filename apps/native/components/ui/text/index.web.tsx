import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { textStyle } from './styles';

type ITextProps = React.ComponentProps<'span'> &
  VariantProps<typeof textStyle> & {};

export const DEFAULT_TEXT_SHADOW_RADIUS = 10;
export const DEFAULT_TEXT_SHADOW_COLOR = 'rgba(0,0,0,0.8)';

const Text = React.forwardRef<React.ElementRef<'span'>, ITextProps>(
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
    }: { className?: string } & ITextProps,
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

    const style = props.style ?? {};
    if (classes['text-shadow']) {
      style.textShadow = `0px 0px ${DEFAULT_TEXT_SHADOW_RADIUS}px ${DEFAULT_TEXT_SHADOW_COLOR}`;
    }

    return (
      <span
        className={textStyle({
          isTruncated,
          bold,
          underline,
          strikeThrough,
          size,
          sub,
          italic,
          highlight,
          class: className,
        })}
        style={style}
        {...props}
        ref={ref}
      />
    );
  },
);

Text.displayName = 'Text';

export { Text };
