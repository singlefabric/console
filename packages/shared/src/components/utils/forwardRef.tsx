/**
 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
 * for creating the base type definitions upon which we improved on
 */

import React from 'react';
import { As, ComponentWithAs, PropsOf, RightJoinProps } from './types';

export default function forwardRef<Props extends object, Component extends As>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >,
) {
  return React.forwardRef(component) as unknown as ComponentWithAs<Component, Props>;
}
