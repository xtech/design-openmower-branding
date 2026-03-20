import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DownloadIcon from '@mui/icons-material/Download'
import { SectionHeader } from '../components/SectionHeader'
import { DemoPanel } from '../components/DemoPanel'
import { brand } from '../../theme'

const base = import.meta.env.BASE_URL

const files = [
  {
    name: 'logo.svg',
    label: 'Wordmark Logo',
    description: 'Full horizontal wordmark — mower icon + "OpenMower" text. Use for headers, splash screens, and marketing. White paths on transparent background.',
    href: `${base}logo.svg`,
  },
  {
    name: 'logo-square.svg',
    label: 'Square Icon',
    description: 'Square icon mark only — balanced 1:1 composition for app icons, favicons, avatars, and nav badges. White paths on transparent background.',
    href: `${base}logo-square.svg`,
  },
  {
    name: 'openmower-ai-tokens.json',
    label: 'AI Tokens',
    description: 'Full design system — colors, typography, component patterns, CSS variables, Tailwind config, and MUI usage snippet. Optimized for AI consumption.',
    href: `${base}openmower-ai-tokens.json`,
  },
  {
    name: 'openmower-theme-factory.json',
    label: 'Theme Factory',
    description: 'Compatible with the anthropic-skills:theme-factory Claude skill. Reference this file when applying the OpenMower look to HTML artifacts.',
    href: `${base}openmower-theme-factory.json`,
  },
]

export function DownloadSection() {
  return (
    <Box>
      <SectionHeader
        label="04 — Resources"
        title="Downloads"
        subtitle="Machine-readable design token files for AI tooling and code generation."
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {files.map(({ name, label, description, href }) => (
          <DemoPanel key={name}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, flexWrap: 'wrap' }}>
              <Box sx={{ flexGrow: 1, minWidth: 200 }}>
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', display: 'block', mb: 0.5 }}
                >
                  {label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.75rem',
                    color: brand.text3,
                    mb: 1,
                  }}
                >
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </Box>
              <Button
                component="a"
                href={href}
                download={name}
                variant="outlined"
                startIcon={<DownloadIcon />}
                sx={{ flexShrink: 0, alignSelf: 'center' }}
              >
                Download
              </Button>
            </Box>
          </DemoPanel>
        ))}
      </Box>
    </Box>
  )
}
