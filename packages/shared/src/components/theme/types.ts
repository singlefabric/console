import type { CSSProperties } from 'react';
import { DeepPartial } from '../../utils/types';
import { css } from 'styled-components'; // to use ReturnType<typeof css>

export interface KubedThemePalette {
  colors: Record<string, Array<any>>;
  accents_0: string;
  accents_1: string;
  accents_2: string;
  accents_3: string;
  accents_4: string;
  accents_5: string;
  accents_6: string;
  accents_7: string;
  accents_8: string;
  accents_9: string;
  background: string;
  foreground: string;
  selection: string;
  primary: string;
  secondary: string;
  code: string;
  border: string;
  success: string;
  successLighter: string;
  successLight: string;
  successDark: string;
  error: string;
  errorLighter: string;
  errorLight: string;
  errorDark: string;
  warning: string;
  warningLighter: string;
  warningLight: string;
  warningDark: string;
  link: string;
  [key: string]: any;
}

export interface KubedThemeExpressiveness {
  linkStyle: string;
  linkHoverStyle: string;
  dropdownBoxShadow: string;
  shadowSmall: string;
  shadowMedium: string;
  shadowLarge: string;

  // Use ReturnType<typeof css> to type CSS-in-JS return value:
  buttonShadow: (rgb: string) => ReturnType<typeof css>;

  portalOpacity: number;
}

export interface KubedThemeLayout {
  spacing: Record<string, any>;
  inputSizes: Record<string, any>;
  gap: string;
  gapNegative: string;
  gapHalf: string;
  gapHalfNegative: string;
  gapQuarter: string;
  gapQuarterNegative: string;
  pageMargin: string;
  pageWidth: string;
  pageWidthWithMargin: string;
  breakpointMobile: string;
  breakpointTablet: string;
  radius: Record<string, any>;
}

export interface KubedThemeFont {
  sans: string;
  mono: string;
  fontSizeBase: string;
}

export interface BreakpointsItem {
  min: string;
  max: string;
}

export interface KubedThemeBreakpoints {
  xs: BreakpointsItem;
  sm: BreakpointsItem;
  md: BreakpointsItem;
  lg: BreakpointsItem;
  xl: BreakpointsItem;
}

export type KubedSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type KubedNumberSize = KubedSizes | number;

export interface KubedTheme {
  type: string;
  font: KubedThemeFont;
  layout: KubedThemeLayout;
  palette: KubedThemePalette;
  breakpoints: KubedThemeBreakpoints;
  expressiveness: KubedThemeExpressiveness;
}

export type KubedThemeOverride = DeepPartial<KubedTheme>;

export interface DefaultProps<T extends string = never> {
  className?: string;
  style?: CSSProperties;
  themeType?: string;
  readonly themeOverride?: KubedThemeOverride;
  classNames?: Partial<Record<T, string>>;
  styles?: Partial<Record<T, CSSProperties>>;
}
