import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { SectionHeader } from '../components/SectionHeader'
import { DemoPanel } from '../components/DemoPanel'
import { brand } from '../../theme'

function StatusDot({ color }: { color: string }) {
  return (
    <Box
      component="span"
      sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: color, display: 'inline-block' }}
    />
  )
}

export function ChipsSection() {
  return (
    <Box>
      <SectionHeader title="Chips & Badges" />

      <DemoPanel>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 3 }}>
          <Chip label="Mowing" color="primary" icon={<StatusDot color={brand.primaryMain} />} />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Error" color="error" />
          <Chip label="Warning" color="warning" />
          <Chip label="Info" color="info" />
          <Chip label="Default" />
        </Box>

        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 3 }}>
          <Chip label="Outlined Primary" color="primary" variant="outlined" />
          <Chip label="Outlined Default" variant="outlined" />
          <Chip label="Outlined Error" color="error" variant="outlined" />
        </Box>

        {/* Custom semantic badges matching brand guide */}
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          {[
            { label: 'Active', bg: 'rgba(76,175,80,0.14)', color: brand.primaryMain },
            { label: 'Charging', bg: 'rgba(172,255,90,0.12)', color: brand.lime },
            { label: 'GPS Lock', bg: 'rgba(122,184,255,0.1)', color: brand.info },
            { label: 'Warning', bg: 'rgba(255,184,90,0.1)', color: brand.warning },
            { label: 'Error', bg: 'rgba(255,112,112,0.1)', color: brand.error },
            { label: 'Idle', bg: 'rgba(150,180,160,0.08)', color: brand.text3 },
          ].map(({ label, bg, color }) => (
            <Box
              key={label}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                px: 1.5,
                py: 0.5,
                borderRadius: 20,
                bgcolor: bg,
                color,
                fontSize: '0.75rem',
                fontWeight: 500,
                '&::before': {
                  content: '""',
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  bgcolor: 'currentColor',
                  display: 'block',
                  flexShrink: 0,
                },
              }}
            >
              {label}
            </Box>
          ))}
        </Box>
      </DemoPanel>
    </Box>
  )
}
