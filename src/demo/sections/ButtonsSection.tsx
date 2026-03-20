import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StopIcon from '@mui/icons-material/Stop'
import SettingsIcon from '@mui/icons-material/Settings'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { SectionHeader } from '../components/SectionHeader'
import { DemoPanel } from '../components/DemoPanel'

export function ButtonsSection() {
  return (
    <Box>
      <SectionHeader label="02 — Components" title="Buttons" />

      <DemoPanel>
        <Typography variant="overline" color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          Contained
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', alignItems: 'center', mb: 4 }}>
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">Large</Button>
          <Button variant="contained" startIcon={<PlayArrowIcon />}>Start Mowing</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="overline" color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          Outlined
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', alignItems: 'center', mb: 4 }}>
          <Button variant="outlined" size="small">Small</Button>
          <Button variant="outlined" size="medium">Medium</Button>
          <Button variant="outlined" size="large">Large</Button>
          <Button variant="outlined" startIcon={<SettingsIcon />}>Configure</Button>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="overline" color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          Text / Ghost / Danger
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', alignItems: 'center', mb: 4 }}>
          <Button variant="text">Text Button</Button>
          <Button
            sx={{
              bgcolor: 'background.paper',
              color: 'text.primary',
              border: '1px solid',
              borderColor: 'divider',
              '&:hover': { borderColor: 'primary.main', bgcolor: 'background.paper' },
            }}
          >
            Ghost
          </Button>
          <Button
            sx={{
              bgcolor: 'rgba(255,112,112,0.1)',
              color: '#FF7070',
              border: '1px solid rgba(255,112,112,0.2)',
              '&:hover': { bgcolor: 'rgba(255,112,112,0.15)' },
            }}
            startIcon={<StopIcon />}
          >
            Emergency Stop
          </Button>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="overline" color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          Icon Buttons
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <IconButton color="primary"><PlayArrowIcon /></IconButton>
          <IconButton color="primary"><StopIcon /></IconButton>
          <IconButton><SettingsIcon /></IconButton>
          <IconButton color="error"><DeleteOutlineIcon /></IconButton>
        </Box>
      </DemoPanel>
    </Box>
  )
}
