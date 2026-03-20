import { createTheme } from '@mui/material/styles'
import { palette } from './palette'
import { typography } from './typography'
import { components } from './components'

/**
 * OpenMower Material UI Theme
 *
 * Usage:
 *   import { openMowerTheme } from './theme'
 *   <ThemeProvider theme={openMowerTheme}>…</ThemeProvider>
 */
export const openMowerTheme = createTheme({
  palette,
  typography,
  components,

  shape: {
    borderRadius: 12,
  },

  spacing: 8,
})

// Re-export tokens for direct use in sx props or styled components
export { brand } from './palette'
export type { Theme } from '@mui/material/styles'
