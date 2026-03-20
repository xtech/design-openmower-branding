import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import { OpenMowerLogo } from '../../components/OpenMowerLogo'
import { brand } from '../../theme'

export function HeroSection() {
  return (
    <Box
      sx={{
        py: 12,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: -60,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 400,
          background: `radial-gradient(ellipse at 50% 100%, rgba(44,199,107,0.14) 0%, transparent 68%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Chip
        label="Brand Identity System v1.0"
        color="primary"
        variant="outlined"
        size="small"
        sx={{ mb: 4, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.6875rem' }}
      />

      <Box sx={{ width: '100%', maxWidth: 540, mx: 'auto', mb: 5 }}>
        <OpenMowerLogo color="white" />
      </Box>

      <Typography variant="h1" sx={{ mb: 2, fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', fontWeight: 700 }}>
        Smart.{' '}
        <Box component="em" sx={{ fontStyle: 'normal', color: brand.green }}>
          Open.
        </Box>{' '}
        Autonomous.
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 480, mx: 'auto', mb: 5 }}
      >
        Community-driven RTK GPS robotic lawn mower. Open source hardware and software for the
        modern maker.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button variant="contained" size="large">
          Get Started
        </Button>
        <Button variant="outlined" size="large">
          View on GitHub
        </Button>
      </Box>
    </Box>
  )
}
