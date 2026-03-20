import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import ScheduleIcon from '@mui/icons-material/Schedule'
import { SectionHeader } from '../components/SectionHeader'

function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        width: 38,
        height: 38,
        borderRadius: '9px',
        bgcolor: 'rgba(76,175,80,0.14)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'primary.main',
        flexShrink: 0,
      }}
    >
      {children}
    </Box>
  )
}

export function CardsSection() {
  return (
    <Box>
      <SectionHeader title="Cards" />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3,1fr)' }, gap: 2.5 }}>
        {/* Battery card */}
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <CardIcon><BatteryChargingFullIcon fontSize="small" /></CardIcon>
              <Box>
                <Typography variant="subtitle2">Battery</Typography>
                <Typography variant="caption" color="text.disabled">Lithium-ion · 24V</Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Currently charging at dock. Estimated full charge in 42 minutes.
            </Typography>
            <Box sx={{ mb: 0.5, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="caption" color="text.disabled">Charge level</Typography>
              <Typography variant="caption" color="primary.main">78%</Typography>
            </Box>
            <LinearProgress variant="determinate" value={78} />
          </CardContent>
        </Card>

        {/* GPS card */}
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <CardIcon><GpsFixedIcon fontSize="small" /></CardIcon>
              <Box>
                <Typography variant="subtitle2">GPS Fix</Typography>
                <Typography variant="caption" color="text.disabled">RTK · High precision</Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              RTK fix acquired. Accuracy within 2 cm. 14 satellites in view.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Chip label="RTK Fixed" color="primary" size="small" />
              <Typography variant="caption" color="text.disabled">±1.8 cm</Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Schedule card */}
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <CardIcon><ScheduleIcon fontSize="small" /></CardIcon>
              <Box>
                <Typography variant="subtitle2">Next Session</Typography>
                <Typography variant="caption" color="text.disabled">Mowing schedule</Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tomorrow at 08:00 — Zone A (Front lawn). Duration ~1h 20min.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button variant="text" size="small" sx={{ p: 0 }}>Edit schedule</Button>
              <Chip label="Enabled" color="primary" size="small" />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
