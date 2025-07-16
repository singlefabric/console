import styled, { css, Interpolation } from 'styled-components';
import { KubedNumberSize, KubedSizes, KubedTheme } from '../theme';
import { colorToRgbValues } from '../utils/color';

interface ButtonStylesProps {
  $loading?: boolean;
  $size?: KubedSizes;
  $radius?: KubedNumberSize;
  theme?: KubedTheme;
  block?: boolean;
  disabled?: boolean;
  $shadow?: boolean;
  $variant?: 'filled' | 'outline' | 'text' | 'link';
  $color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const sizes: Record<KubedSizes, Interpolation<any>> = {
  xs: css`
    font-size: 10px;
    padding: 0 14px;
  `,
  sm: css`
    font-size: 12px;
    padding: 0 20px;
  `,
  md: css`
    font-size: 14px;
    padding: 0 23px;
  `,
  lg: css`
    font-size: 16px;
    padding: 0 26px;
  `,
  xl: css`
    font-size: 18px;
    padding: 0 30px;
  `,
};

const getButtonSize = (size: KubedSizes = 'md', block?: boolean) => css`
  ${sizes[size]};
  width: ${block ? '100%' : 'auto'};
  height: ${({ theme }) => theme.layout.inputSizes[size]};
`;

const getButtonColor = (
  variant: NonNullable<ButtonStylesProps['$variant']> = 'filled',
  colorSchema: Record<string, string>
): Interpolation<any> => {
  const styles: Record<'filled' | 'outline' | 'text' | 'link', Interpolation<any>> = {
    filled: css`
      background-color: ${colorSchema.bg};
      border-color: ${colorSchema.border};
      color: ${colorSchema.color};
    `,
    outline: css`
      background-color: #fff;
      border-color: ${colorSchema.border};
      color: ${colorSchema.fg || colorSchema.bg};
    `,
    text: css`
      background-color: transparent;
      border-color: transparent;
      color: ${colorSchema.fg || colorSchema.bg};
    `,
    link: css`
      font-weight: 400;
      background-color: transparent;
      border-color: transparent;
      color: ${colorSchema.fg || colorSchema.bg};
      padding: 0;
    `,
  };
  return styles[variant];
};

const getButtonHoverColor = (
  variant: NonNullable<ButtonStylesProps['$variant']> = 'filled',
  colorSchema: Record<string, string>,
  disabled?: boolean,
  $loading?: boolean,
  shadow?: boolean,
  theme?: KubedTheme
): Interpolation<any> | null => {
  if (disabled) return null;
  if (shadow) {
    return css`
      box-shadow: none;
    `;
  }
  if (!theme) return null;
  const { palette } = theme;
  if (variant === 'link') {
    return css`
      text-decoration: underline;
    `;
  }
  if (variant === 'text') {
    return css`
      background-color: ${palette.accents_2};
    `;
  }

  const styles: Record<'filled' | 'outline' | 'text', Interpolation<any>> = {
    filled: css`
      background-color: ${colorSchema.hoverBg ?? colorSchema.bg};
      border-color: ${colorSchema.hoverBorder ?? colorSchema.hoverBg ?? colorSchema.bg};
    `,
    outline: css`
      background-color: ${colorSchema.hoverBg ?? colorSchema.bg};
      color: ${colorSchema.color};
    `,
    text: css`
      background-color: transparent;
      border-color: transparent;
      color: ${palette.accents_5};
    `,
  };

  return styles[variant] ?? null;
};

const getShadow = (
  shadow: boolean | undefined,
  colorSchema: Record<string, string>,
  theme: KubedTheme
): Interpolation<any> | null => {
  if (shadow) {
    const { expressiveness } = theme;
    const rgb = colorToRgbValues(colorSchema.bg).join(' ');
    return expressiveness.buttonShadow(rgb);
  }
  return null;
};

const getButtonStyles = (
  theme: KubedTheme,
  color: ButtonStylesProps['$color'] = 'default',
  variant: ButtonStylesProps['$variant'] = 'filled',
  shadow?: boolean,
  disabled?: boolean,
  $loading?: boolean
): Interpolation<any> => {
  const { palette } = theme;
  const { background, border, accents_1, accents_2, accents_7, accents_8, accents_9, primary } = palette;

  const colors: Record<NonNullable<ButtonStylesProps['$color']>, Record<string, string>> = {
    default: {
      bg: accents_1,
      border,
      color: accents_7,
      fg: accents_7,
      hoverBg: accents_2,
      hoverBorder: border,
    },
    primary: {
      bg: palette.colors[primary][2],
      border: palette.colors[primary][2],
      color: '#fff',
      hoverBg: palette.colors[primary][3],
    },
    secondary: {
      bg: accents_8,
      border: accents_8,
      color: background,
      hoverBg: accents_9,
    },
    success: {
      bg: palette.colors.success?.[2] ?? '#38a169',
      border: palette.colors.success?.[2] ?? '#38a169',
      color: '#fff',
      hoverBg: palette.colors.success?.[3] ?? '#2f855a',
    },
    warning: {
      bg: palette.colors.warning?.[2] ?? '#d69e2e',
      border: palette.colors.warning?.[2] ?? '#d69e2e',
      color: '#fff',
      hoverBg: palette.colors.warning?.[3] ?? '#b7791f',
    },
    error: {
      bg: palette.colors.error?.[2] ?? '#e53e3e',
      border: palette.colors.error?.[2] ?? '#e53e3e',
      color: '#fff',
      hoverBg: palette.colors.error?.[3] ?? '#c53030',
    },
  };

  const safeColor = color && colors[color] ? color : 'default';
  const colorSchema = colors[safeColor];

  return css`
    box-shadow: ${getShadow(shadow, colorSchema, theme)};
    ${getButtonColor(variant, colorSchema)};
    ${disabled ? css`opacity: 0.6;` : null};

    &:hover {
      ${getButtonHoverColor(variant, colorSchema, disabled, $loading, shadow, theme)};
    }
  `;
};

export const ButtonContainer = styled.div<ButtonStylesProps>`
  box-sizing: border-box;
  user-select: none;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  border: 1px solid;
  transition: all 0.3s ease-in-out;
  border-radius: ${({ $radius = 'sm', theme }) => theme.layout.radius[$radius]};
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  ${({ $loading = false, disabled = false }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        pointer-events: auto;
      `;
    }
    if ($loading) {
      return css`
        cursor: default;
        pointer-events: none;
      `;
    }
    return css`
      cursor: pointer;
      pointer-events: auto;
    `;
  }};
  ${({ $size = 'md', block }) => getButtonSize($size, block)};
  ${({ theme, $color = 'default', $variant = 'filled', $shadow = false, disabled = false, $loading = false }) =>
    getButtonStyles(theme, $color, $variant, $shadow, disabled, $loading)};
  ${({ $loading = false }) => ($loading ? 'opacity: 0.6;' : null)};
`;

export const ButtonInner = styled.div<ButtonStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  line-height: 1;
`;

export const ButtonLabel = styled.span<ButtonStylesProps>`
  display: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconLeftSpan = styled.span<ButtonStylesProps>`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const IconRightSpan = styled.span<ButtonStylesProps>`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
