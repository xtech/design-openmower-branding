import type { PaletteOptions } from '@mui/material/styles'

/** Raw brand color tokens */
export const brand = {
  green: '#2CC76B',
  greenDeep: '#1EA856',
  greenLight: '#3DD97E',
  greenPale: '#E3F9EC',
  lime: '#ACFF5A',

  dark: '#0C1D13',
  surface: '#111E18',
  surface2: '#182A20',
  surface3: '#1E3328',

  border: '#243D2E',
  border2: '#2F4F3C',

  text: '#EEF9F2',
  text2: '#79B890',
  text3: '#4C7060',

  // Semantic extras
  error: '#FF7070',
  warning: '#FFB85A',
  info: '#7AB8FF',
  success: '#2CC76B',
} as const

export const palette: PaletteOptions = {
  mode: 'dark',

  primary: {
    main: brand.green,
    dark: brand.greenDeep,
    light: brand.greenLight,
    contrastText: brand.dark,
  },

  secondary: {
    main: brand.lime,
    contrastText: brand.dark,
  },

  error: {
    main: brand.error,
    contrastText: brand.text,
  },

  warning: {
    main: brand.warning,
    contrastText: brand.dark,
  },

  info: {
    main: brand.info,
    contrastText: brand.dark,
  },

  success: {
    main: brand.success,
    dark: brand.greenDeep,
    contrastText: brand.dark,
  },

  background: {
    default: brand.dark,
    paper: brand.surface,
  },

  text: {
    primary: brand.text,
    secondary: brand.text2,
    disabled: brand.text3,
  },

  divider: brand.border,
}
