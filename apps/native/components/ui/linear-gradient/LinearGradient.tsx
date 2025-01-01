'use client';
import React from 'react';

import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';

import { tva } from '@gluestack-ui/nativewind-utils/tva';

cssInterop(ExpoLinearGradient, {
  className: 'style',
});

const linearGradientStyle = tva({
  base: '',
});

export const LinearGradient = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <ExpoLinearGradient
        {...props}
        className={linearGradientStyle({ class: className })}
        ref={ref}
      />
    );
  },
);
