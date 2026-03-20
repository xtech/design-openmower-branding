import type { PaletteOptions } from '@mui/material/styles'

/** Raw brand color tokens */
export const brand = {
  // OpenMower brand green (identity / accent use)
  green: '#2CC76B',
  greenDeep: '#1EA856',
  greenLight: '#3DD97E',
  greenPale: '#E3F9EC',
  lime: '#ACFF5A',

  // MUI Material Green — used as primary (softer, better contrast with white text)
  primaryMain: '#4CAF50',   // Green 500
  primaryLight: '#81C784',  // Green 300
  primaryDark: '#388E3C',   // Green 700

  dark: '#181818',
  surface: '#212121',
  surface2: '#282828',
  surface3: '#2E2E2E',

  border: '#383838',
  border2: '#454545',

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
    main: brand.primaryMain,
    dark: brand.primaryDark,
    light: brand.primaryLight,
    contrastText: '#ffffff',
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
