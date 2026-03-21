import type { PaletteOptions } from '@mui/material/styles'
import tokens from './tokens.json'

const c = tokens.colors

/** Raw brand color tokens — source of truth is tokens.json */
export const brand = {
  // Accent greens (identity / decorative use)
  green:      c.accent.green,
  greenDeep:  c.accent.greenDeep,
  greenLight: c.accent.greenLight,
  greenPale:  c.accent.greenPale,
  amber:      c.accent.amber,

  // Mow Green — used as interactive primary
  primaryMain:  c.primary.main,
  primaryLight: c.primary.light,
  primaryDark:  c.primary.dark,

  // Light surfaces
  dark:     c.background.default,
  surface:  c.background.paper,
  surface2: c.background.surface2,
  surface3: c.background.surface3,

  border:  c.border.subtle,
  border2: c.border.default,

  // Text
  text:  c.text.primary,
  text2: c.text.secondary,
  text3: c.text.disabled,

  // Semantic
  error:   c.semantic.error,
  warning: c.semantic.warning,
  info:    c.semantic.info,
  success: c.semantic.success,
} as const

export const palette: PaletteOptions = {
  mode: 'light',

  primary: {
    main:         brand.primaryMain,
    dark:         brand.primaryDark,
    light:        brand.primaryLight,
    contrastText: c.primary.contrastText,
  },

  secondary: {
    main:         c.secondary.main,
    contrastText: c.secondary.contrastText,
  },

  error:   { main: brand.error,   contrastText: '#ffffff' },
  warning: { main: brand.warning, contrastText: '#ffffff' },
  info:    { main: brand.info,    contrastText: '#ffffff' },

  success: {
    main:         brand.success,
    dark:         brand.greenDeep,
    contrastText: '#ffffff',
  },

  background: {
    default: brand.dark,
    paper:   brand.surface,
  },

  text: {
    primary:  brand.text,
    secondary: brand.text2,
    disabled: brand.text3,
  },

  divider: brand.border,
}
