import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import { OpenMowerLogo } from '../../components/OpenMowerLogo'

export function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#0E100E',
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
          background: `radial-gradient(ellipse at 50% 100%, #063A19 0%, transparent 68%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 12, textAlign: 'center', position: 'relative' }}>
        <Chip
          label="Brand Identity System v1.0"
          size="small"
          sx={{ mb: 4, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.6875rem', bgcolor: 'rgba(255,255,255,0.1)', color: '#EBEBEB', border: '1px solid rgba(255,255,255,0.2)' }}
        />

        <Box sx={{ width: '100%', maxWidth: 540, mx: 'auto', mb: 5 }}>
          <OpenMowerLogo color="white" />
        </Box>

        <Typography variant="h1" sx={{ mb: 2, fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', fontWeight: 700, color: '#EBEBEB' }}>
          Smart.{' '}
          <Box component="em" sx={{ fontStyle: 'normal', color: '#2CC76B' }}>
            Open.
          </Box>{' '}
          Autonomous.
        </Typography>

        <Typography
          variant="body1"
          sx={{ maxWidth: 480, mx: 'auto', mb: 5, color: '#8A9490' }}
        >
          Community-driven RTK GPS robotic lawn mower. Open source hardware and software for the
          modern maker.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="contained" size="large">
            Get Started
          </Button>
          <Button variant="outlined" size="large" sx={{ borderColor: 'rgba(255,255,255,0.4)', color: '#EBEBEB', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.06)' } }}>
            View on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
