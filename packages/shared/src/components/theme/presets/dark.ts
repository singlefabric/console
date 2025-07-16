import { css } from 'styled-components';
import { KubedTheme, KubedThemePalette, KubedThemeExpressiveness } from '../types';
import { defaultFont, defaultBreakpoints, defaultLayout } from './shared';
import colors from './colors';

export const palette: KubedThemePalette = {
  colors,
  accents_0: '#060c2b', // deepest blue-black
  accents_1: '#0a1849', // nearly-navy blue
  accents_2: '#122770', // rich dark blue
  accents_3: '#1c3bad', // Perplexity deep blue
  accents_4: '#2a54e0', // strong Perplexity blue
  accents_5: '#5274ff', // medium Perplexity blue
  accents_6: '#809fff', // soft blue accent
  accents_7: '#b0c7ff', // pastel blue accent
  accents_8: '#d9e4ff', // light blue
  accents_9: '#f2f7ff', // lightest, blue-tinted white
  background: '#060c2b', // very dark blue-black for backgrounds
  foreground: '#d9e4ff', // high-contrast soft blue text
  selection: '#7a70ff', // purple-blue highlight
  primary: '#5274ff', // prominent blue
  secondary: '#809fff', // lighter blue accent
  code: '#bb86fc', // purple code highlight (fits tech palette)
  border: '#122770', // dark blue border
  error: '#ca2621', // red for critical errors
  errorLight: '#ea8573', // light salmon for error
  errorLighter: '#fae7e5', // soft blush for gentle error state
  errorDark: '#8c3231', // plum dark for severe errors
  success: '#55bc8a', // teal green for positive states
  successLight: '#a2d8bb',
  successLighter: '#c4e6d4',
  successDark: '#2f6b5a',
  warning: '#f5a623', // gold/yellow for warnings
  warningLight: '#ffc781',
  warningLighter: '#ffe1be',
  warningDark: '#7a5a2a',
  link: '#5274ff', // styled blue link
};

export const expressiveness: KubedThemeExpressiveness = {
  linkStyle: 'underline',
  linkHoverStyle: 'none',
  dropdownBoxShadow: '0 4px 15px 0 rgba(82, 116, 255, 0.25)',
  shadowSmall: '0 6px 14px rgba(82, 116, 255, 0.15)',
  shadowMedium: '0 8px 34px rgba(82, 116, 255, 0.15)',
  shadowLarge: '0 32px 64px rgba(82, 116, 255, 0.15)',
  buttonShadow: (rgb: string) => {
    return css`0 8px 20px 0 rgba(${rgb}, 0.18)`;
  },
  portalOpacity: 0.3,
};

export const font = defaultFont;
export const breakpoints = defaultBreakpoints;
export const layout = defaultLayout;

export const themes: KubedTheme = {
  type: 'dark',
  font,
  layout,
  palette,
  breakpoints,
  expressiveness,
};

export default themes;
