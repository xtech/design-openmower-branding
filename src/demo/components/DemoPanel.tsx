import Paper from '@mui/material/Paper'
import type { PaperProps } from '@mui/material/Paper'

/**
 * A consistently styled container for component demos.
 */
export function DemoPanel({ sx, children, ...rest }: PaperProps) {
  return (
    <Paper sx={{ p: { xs: 3, sm: 4 }, ...sx }} {...rest}>
      {children}
    </Paper>
  )
}
