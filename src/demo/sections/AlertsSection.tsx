import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { SectionHeader } from '../components/SectionHeader'

export function AlertsSection() {
  return (
    <Box>
      <SectionHeader title="Alerts" />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Alert severity="success">
          <AlertTitle>Mowing complete</AlertTitle>
          Zone A finished in 1h 17min. All areas covered — 98% efficiency.
        </Alert>
        <Alert severity="info">
          <AlertTitle>Firmware update available</AlertTitle>
          Version 1.4.2 is ready to install. No breaking changes.
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Low battery</AlertTitle>
          Battery at 18%. Returning to dock to recharge before resuming.
        </Alert>
        <Alert severity="error">
          <AlertTitle>Obstacle detected</AlertTitle>
          Mower stopped at coordinate (12.4, 8.7). Manual inspection required.
        </Alert>
      </Box>
    </Box>
  )
}
