import Card from '@mui/material/Card'
import type { CardProps } from '@mui/material/Card'

/**
 * A consistently styled container for component demos.
 */
export function DemoPanel({ sx, children, ...rest }: CardProps) {
  return (
    <Card sx={{ p: { xs: 3, sm: 4 }, ...sx }} {...rest}>
      {children}
    </Card>
  )
}
