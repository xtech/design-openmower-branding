import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import { SectionHeader } from '../components/SectionHeader'
import { DemoPanel } from '../components/DemoPanel'

export function FormSection() {
  return (
    <Box>
      <SectionHeader title="Form Controls" />

      <DemoPanel>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField label="Mower name" defaultValue="Mower #1" fullWidth />
            <TextField label="Home dock IP" placeholder="192.168.1.100" fullWidth />
            <TextField
              label="Mowing zone"
              select
              defaultValue="zone-a"
              fullWidth
            >
              <MenuItem value="zone-a">Zone A — Front lawn</MenuItem>
              <MenuItem value="zone-b">Zone B — Back garden</MenuItem>
              <MenuItem value="zone-c">Zone C — Side strip</MenuItem>
            </TextField>
            <TextField
              label="Notes"
              multiline
              rows={3}
              placeholder="Any special instructions…"
              fullWidth
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Typography variant="overline" color="text.disabled" sx={{ display: 'block', mb: 1 }}>
                Cutting height (mm)
              </Typography>
              <Slider
                defaultValue={45}
                min={20}
                max={90}
                step={5}
                marks={[
                  { value: 20, label: '20' },
                  { value: 55, label: '55' },
                  { value: 90, label: '90' },
                ]}
                valueLabelDisplay="auto"
              />
            </Box>

            <Box>
              <FormLabel sx={{ color: 'text.disabled', fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                Pattern
              </FormLabel>
              <RadioGroup defaultValue="random" sx={{ mt: 1 }}>
                <FormControlLabel value="random" control={<Radio size="small" />} label="Random" />
                <FormControlLabel value="stripes" control={<Radio size="small" />} label="Stripes" />
                <FormControlLabel value="spiral" control={<Radio size="small" />} label="Spiral" />
              </RadioGroup>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <FormControlLabel control={<Switch defaultChecked />} label="Enable rain sensor" />
              <FormControlLabel control={<Switch />} label="Night mode" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Save session logs" />
              <FormControlLabel control={<Checkbox />} label="Send push notifications" />
            </Box>
          </Box>
        </Box>
      </DemoPanel>
    </Box>
  )
}
