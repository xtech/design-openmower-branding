import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <Box sx={{ mb: 4 }}>
      {label && (
        <Typography variant="overline" color="primary" sx={{ display: 'block', mb: 1 }}>
          {label}
        </Typography>
      )}
      <Typography variant="h2">{title}</Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 580 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
