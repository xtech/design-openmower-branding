import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { SectionHeader } from '../components/SectionHeader'
import { brand } from '../../theme'

export function TypographySection() {
  return (
    <Box>
      <SectionHeader title="Typography" />

      <Box>
        {[
          { variant: 'h1' as const, label: 'h1', spec: '42px / 600 / −0.02em', text: 'OpenMower' },
          { variant: 'h2' as const, label: 'h2', spec: '30px / 600 / −0.01em', text: 'Smart Lawn Care' },
          { variant: 'h3' as const, label: 'h3', spec: '22px / 600', text: 'RTK GPS Navigation' },
          { variant: 'h4' as const, label: 'h4', spec: '18px / 600', text: 'Autonomous Mowing' },
          { variant: 'h5' as const, label: 'h5', spec: '16px / 600', text: 'Zone Management' },
          { variant: 'h6' as const, label: 'h6', spec: '14px / 600', text: 'Session History' },
        ].map(({ variant, label, spec, text }) => (
          <Box key={variant}>
            <Box sx={{ py: 3, display: 'flex', gap: 5, alignItems: 'baseline' }}>
              <Box sx={{ minWidth: 150, flexShrink: 0 }}>
                <Typography variant="caption" color="text.disabled" sx={{ display: 'block', fontFamily: '"DM Mono", monospace', textTransform: 'none', letterSpacing: 0 }}>
                  {label}
                </Typography>
                <Typography variant="caption" color="text.disabled" sx={{ fontFamily: '"DM Mono", monospace', textTransform: 'none', letterSpacing: 0 }}>
                  {spec}
                </Typography>
              </Box>
              <Typography variant={variant}>{text}</Typography>
            </Box>
            <Divider />
          </Box>
        ))}

        <Box sx={{ py: 3, display: 'flex', gap: 5, alignItems: 'baseline' }}>
          <Box sx={{ minWidth: 150, flexShrink: 0 }}>
            <Typography variant="caption" color="text.disabled" sx={{ display: 'block', fontFamily: '"DM Mono", monospace', textTransform: 'none', letterSpacing: 0 }}>
              body1
            </Typography>
            <Typography variant="caption" color="text.disabled" sx={{ fontFamily: '"DM Mono", monospace', textTransform: 'none', letterSpacing: 0 }}>
              16px / 400 / 1.7
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520 }}>
            OpenMower is a community project building open-source software and hardware for RTK GPS
            robotic lawn mowers. Precision navigation meets maker culture.
          </Typography>
        </Box>
        <Divider />

        <Box sx={{ py: 3, display: 'flex', gap: 5, alignItems: 'baseline' }}>
          <Box sx={{ minWidth: 150, flexShrink: 0 }}>
            <Typography variant="caption" color="text.disabled" sx={{ display: 'block', fontFamily: '"DM Mono", monospace', textTransform: 'none', letterSpacing: 0 }}>
              code
            </Typography>
            <Typography variant="caption" color="text.disabled" sx={{ fontFamily: '"DM Mono", monospace', textTransform: 'none', letterSpacing: 0 }}>
              DM Mono / 14px
            </Typography>
          </Box>
          <Typography
            component="code"
            sx={{ fontFamily: '"DM Mono", monospace', fontSize: '0.875rem', color: brand.lime }}
          >
            {'const position = await gps.getFixedPosition()'}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
