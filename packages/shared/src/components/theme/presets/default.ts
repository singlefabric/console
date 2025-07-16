// ./types/styled.d.ts
import 'styled-components';
import { KubedTheme } from '../types';

declare module 'styled-components' {
  export interface DefaultTheme extends KubedTheme {}
}

// ./presets/perplexity.ts
import { css } from 'styled-components';
import { KubedTheme, KubedThemePalette, KubedThemeExpressiveness } from '../types';
import { defaultFont, defaultBreakpoints, defaultLayout } from './shared';
import colors from './colors';

// Define Vercel-like Palette
export const palette: KubedThemePalette = {
  colors,

  // Vercel-like colors: clean blacks, whites, and subtle grays
  accents_0: '#fafafa',
  accents_1: '#f4f4f5',
  accents_2: '#e4e4e7',
  accents_3: '#d4d4d8',
  accents_4: '#a1a1aa',
  accents_5: '#71717a',
  accents_6: '#52525b',
  accents_7: '#3f3f46',
  accents_8: '#27272a',
  accents_9: '#18181b',

  background: '#ffffff',     // pure white background
  foreground: '#000000',     // pure black for text
  selection: '#0070f3',      // Vercel blue highlight
  primary: '#000000',        // black primary
  secondary: '#666666',      // medium gray

  code: '#eb5757',           // red for code syntax highlighting
  border: '#eaeaea',         // light gray borders

  error: colors.red[4],
  errorLight: colors.red[2],
  errorLighter: colors.red[1],
  errorDark: colors.red[5],

  success: colors.green[3],
  successLight: colors.green[1],
  successLighter: colors.green[0],
  successDark: colors.green[4],

  warning: colors.yellow[3],
  warningLight: colors.yellow[1],
  warningLighter: colors.yellow[0],
  warningDark: colors.yellow[4],

  link: '#0070f3',           // Vercel blue links
};

// Expressiveness with clean, minimal shadows like Vercel
export const expressiveness: KubedThemeExpressiveness = {
  linkStyle: 'none',
  linkHoverStyle: 'underline',
  dropdownBoxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
  shadowSmall: '0 2px 8px rgba(0, 0, 0, 0.12)',
  shadowMedium: '0 4px 16px rgba(0, 0, 0, 0.12)',
  shadowLarge: '0 8px 32px rgba(0, 0, 0, 0.12)',
  buttonShadow: (rgb: string) => {
    return css`0 2px 8px 0 rgba(${rgb}, 0.12)`;
  },
  portalOpacity: 0.5,
};

export const font = defaultFont;
export const breakpoints = defaultBreakpoints;
export const layout = defaultLayout;

// Export the Vercel-inspired theme object
export const themes: KubedTheme = {
  type: 'light',
  font,
  layout,
  palette,
  breakpoints,
  expressiveness,
};

export default themes;

// ./components/styled.tsx
import styled from 'styled-components';

export const Root = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.foreground};
  font-family: ${({ theme }) => theme.font.sans};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  transition: background-color 0.2s ease, color 0.2s ease;
`;

export const DescriptionWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: left top;
  background-size: auto 100%;
  background-image: url('/assets/about-bg.svg');
  background-color: ${({ theme }) => theme.palette.accents_0};
  padding: 48px 32px 48px 48px;
  border-radius: 8px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.palette.border};

  @media (max-width: 768px) {
    background-position: center top;
    padding: 32px 16px 32px 16px;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
    margin-bottom: 16px;
  }
`;

export const Logo = styled.img`
  width: 180px;
  height: auto;
  margin-bottom: 24px;
  user-select: none;
  pointer-events: none;
  filter: brightness(0); // Make logo black for Vercel aesthetic
  transition: filter 0.2s ease;

  @media (max-width: 768px) {
    width: 150px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 120px;
    margin-bottom: 16px;
  }
`;

export const Description = styled.p`
  margin: 0 0 24px 0;
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: 400;
  font-size: 17px;
  line-height: 1.6;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.palette.accents_7};
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 15px;
    max-width: 100%;
    line-height: 1.65;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Links = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  padding: 20px 0 12px 0;
  flex-wrap: wrap;

  span + span {
    margin-left: 0;
    position: relative;

    &:before {
      content: '|';
      color: ${({ theme }) => theme.palette.accents_4};
      margin: 0 12px 0 0;
      vertical-align: middle;
      font-weight: 300;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    line-height: 24px;
    vertical-align: middle;
    color: ${({ theme }) => theme.palette.primary};
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    padding: 4px 8px;
    margin: -4px -8px;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.palette.secondary};
      text-decoration: underline;
      outline: none;
      background-color: ${({ theme }) => theme.palette.accents_1};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.palette.selection};
      outline-offset: 2px;
    }

    img {
      margin-right: 6px;
      vertical-align: middle;
      user-select: none;
      width: 16px;
      height: 16px;
    }

    strong {
      vertical-align: middle;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding: 16px 0 8px 0;
  }

  @media (max-width: 480px) {
    gap: 16px;

    span + span:before {
      margin: 0 8px 0 0;
    }
  }
`;

// Additional utility components for Vercel-style layouts
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

export const Section = styled.section`
  padding: 48px 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 32px 0;
  }

  @media (max-width: 480px) {
    padding: 24px 0;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 8px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.expressiveness.shadowSmall};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.expressiveness.shadowMedium};
    border-color: ${({ theme }) => theme.palette.accents_3};
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.background};
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.expressiveness.buttonShadow('0, 0, 0')};

  &:hover {
    background-color: ${({ theme }) => theme.palette.accents_8};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.expressiveness.shadowMedium};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.selection};
    outline-offset: 2px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.accents_3};
    color: ${({ theme }) => theme.palette.accents_6};
    cursor: not-allowed;
    transform: none;
  }
`;
