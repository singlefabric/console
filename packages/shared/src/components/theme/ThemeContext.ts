import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { KubedTheme } from './types';

export const useTheme = (): KubedTheme => {
  const theme = useContext(ThemeContext);
  return theme as unknown as KubedTheme;
};
