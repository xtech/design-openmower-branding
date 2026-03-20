import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SectionHeader } from '../components/SectionHeader'
import { brand } from '../../theme'

/** Diagonal hatch overlay identical to the brand guide swatch pattern */
const swatchHatch = {
  position: 'absolute' as const,
  inset: 0,
  opacity: 0.07,
  backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
  backgroundSize: '8px 8px',
  pointerEvents: 'none',
}

const primaryColors = [
  {
    name: 'Mow Green',
    hex: '#2CC76B',
    bg: brand.green,
    use: 'Primary brand color — buttons, links, highlights, icons',
  },
  {
    name: 'Electric Lime',
    hex: '#ACFF5A',
    bg: brand.lime,
    use: 'Accent color — code, special callouts, notifications',
  },
  {
    name: 'Deep Forest',
    hex: '#0C1D13',
    bg: brand.dark,
    use: 'Primary background — app, dark mode, canonical surfaces',
  },
  {
    name: 'Pale Meadow',
    hex: '#E3F9EC',
    bg: brand.greenPale,
    infoBg: '#1A2F22',
    use: 'Light mode background — documentation, print, light UIs',
  },
]

const greenScale = [
  '#D4F7E4', '#A8EFC5', '#72DFA2', '#3ECF7C',
  '#2CC76B', '#1EA856', '#14853F', '#0C5E2B', '#063A19',
]

const darkScale = [
  brand.text,       // #EEF9F2
  brand.text2,      // #79B890
  brand.text3,      // #4C7060
  brand.border2,    // #2F4F3C
  brand.border,     // #243D2E
  brand.surface3,   // #1E3328
  brand.surface2,   // #182A20
  brand.surface,    // #111E18
  brand.dark,       // #0C1D13
]

export function ColorsSection() {
  return (
    <Box>
      <SectionHeader
        label="01 — Color System"
        title="Palette"
        subtitle="Rooted in nature, sharpened by technology. The palette evokes precision engineering and healthy growth."
      />

      {/* Primary color cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: 2,
          mb: 5,
        }}
      >
        {primaryColors.map(({ name, hex, bg, infoBg, use }) => (
          <Box
            key={hex}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            {/* Swatch with hatch pattern */}
            <Box sx={{ height: 130, bgcolor: bg, position: 'relative' }}>
              <Box sx={swatchHatch} />
            </Box>
            {/* Info */}
            <Box sx={{ p: '16px 18px', bgcolor: infoBg ?? brand.surface2 }}>
              <Typography sx={{ fontSize: '0.9375rem', fontWeight: 600, mb: 0.25 }}>
                {name}
              </Typography>
              <Typography sx={{ fontFamily: '"DM Mono", monospace', fontSize: '0.8125rem', color: 'text.secondary' }}>
                {hex}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', mt: 0.75, lineHeight: 1.5 }}>
                {use}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Green scale */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', fontWeight: 500, mb: 1.5 }}>
          Green scale — full ramp
        </Typography>
        <Box
          sx={{
            display: 'flex',
            height: 44,
            borderRadius: 3,
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          {greenScale.map((color) => (
            <Box key={color} sx={{ flex: 1, bgcolor: color, position: 'relative' }}>
              <Box sx={swatchHatch} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Dark / neutral scale */}
      <Box>
        <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', fontWeight: 500, mb: 1.5 }}>
          Dark / Neutral scale
        </Typography>
        <Box
          sx={{
            display: 'flex',
            height: 44,
            borderRadius: 3,
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          {darkScale.map((color) => (
            <Box key={color} sx={{ flex: 1, bgcolor: color, position: 'relative' }}>
              <Box sx={swatchHatch} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
