import type { TypographyOptions } from '@mui/material/styles/createTypography'

export const typography: TypographyOptions = {
  fontFamily: '"DM Sans", sans-serif',

  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: {
    fontSize: '2.625rem',   // 42px
    fontWeight: 600,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  },
  h2: {
    fontSize: '1.875rem',   // 30px
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '1.375rem',   // 22px
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: '1.125rem',   // 18px
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1rem',       // 16px
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '0.875rem',   // 14px
    fontWeight: 600,
    lineHeight: 1.5,
  },

  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.6,
  },

  body1: {
    fontSize: '1rem',       // 16px
    fontWeight: 400,
    lineHeight: 1.7,
  },
  body2: {
    fontSize: '0.875rem',   // 14px
    fontWeight: 400,
    lineHeight: 1.6,
  },

  caption: {
    fontSize: '0.6875rem',  // 11px
    fontWeight: 500,
    letterSpacing: '0.08em',
    lineHeight: 1.5,
  },

  overline: {
    fontSize: '0.6875rem',  // 11px
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    lineHeight: 2,
  },

  button: {
    fontSize: '0.9375rem',  // 15px
    fontWeight: 500,
    letterSpacing: '0.01em',
    textTransform: 'none',
  },
}
