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

  // Dark surfaces — graphite with a subtle green hint
  dark: '#111412',
  surface: '#181C19',
  surface2: '#1F2420',
  surface3: '#262C28',

  border: '#343C39',
  border2: '#424A47',

  // Text — neutral grey, green toned way down vs original brand
  text: '#EBEBEB',
  text2: '#8A9490',
  text3: '#5C6762',

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
