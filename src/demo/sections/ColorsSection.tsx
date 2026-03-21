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
    use: 'Primary color — buttons, links, focus rings, active states',
  },
  {
    name: 'Amber',
    hex: '#F5A523',
    bg: brand.amber,
    use: 'Accent color — code, charging status, callouts',
  },
  {
    name: 'Pale Meadow',
    hex: '#E3F9EC',
    bg: brand.greenPale,
    use: 'Light mode accent — documentation, print, tinted surfaces',
  },
  {
    name: 'Graphite',
    hex: '#1A1A1A',
    bg: '#1A1A1A',
    use: 'Primary text — headings, labels, dark UI elements',
  },
]

// Light neutral scale — from lightest surface to darkest text
const neutralScale = [
  brand.surface,  // #FFFFFF — white paper
  brand.dark,     // #F2F6F3 — default background
  brand.surface2, // #EDF2EE — card surface
  brand.surface3, // #E3EAE4 — elevated surface
  brand.border,   // #CCDAD0 — subtle border
  brand.border2,  // #AFC2B6 — default border
  brand.text3,    // #7A9490 — disabled text
  brand.text2,    // #4A6158 — secondary text
  brand.text,     // #141F1A — primary text
]

// Brand accent green (original #2CC76B) full ramp
const brandGreenScale = [
  '#D4F7E4', '#A8EFC5', '#72DFA2', '#3ECF7C',
  '#2CC76B', '#1EA856', '#14853F', '#0C5E2B', '#063A19',
]

// Amber ramp
const amberScale = [
  '#FEF4E0', '#FDE3A8', '#FCC762', '#F5A523',
  '#E08B0D', '#BC7209', '#935907', '#6B4005', '#402500',
]

// Semantic colours — dark = text/icon color, light = alert background tint
const semanticColors = [
  { name: 'Error',   dark: brand.error,      light: '#FFE4DE' },
  { name: 'Warning', dark: '#F5A523',         light: '#FFF0C2' },
  { name: 'Info',    dark: brand.info,       light: '#D6EAFF' },
  { name: 'Success', dark: brand.primaryMain, light: '#C8F5DC' },
]

function ScaleRow({ label, colors }: { label: string; colors: string[] }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', fontWeight: 500, mb: 1.5 }}>
        {label}
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
        {colors.map((color, i) => (
          <Box key={i} sx={{ flex: 1, bgcolor: color, position: 'relative' }}>
            <Box sx={swatchHatch} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

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
            key={name}
            sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}
          >
            <Box sx={{ height: 130, bgcolor: bg, position: 'relative' }}>
              <Box sx={swatchHatch} />
            </Box>
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

      {/* Colour scales */}
      <ScaleRow label="Mow green scale — primary color ramp" colors={brandGreenScale} />
      <ScaleRow label="Amber scale — #F5A523 ramp" colors={amberScale} />
      <ScaleRow
        label="Light / Neutral scale — warm white surfaces to dark text"
        colors={neutralScale}
      />

      {/* Semantic swatches */}
      <Box sx={{ mt: 1 }}>
        <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', fontWeight: 500, mb: 1.5 }}>
          Semantic colours
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {semanticColors.map(({ name, dark, light }) => (
            <Box key={name} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 36,
                  height: 28,
                  borderRadius: 1,
                  flexShrink: 0,
                  border: '1px solid rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                }}
              >
                <Box sx={{ flex: 1, bgcolor: dark, position: 'relative' }}>
                  <Box sx={swatchHatch} />
                </Box>
                <Box sx={{ flex: 1, bgcolor: light, position: 'relative' }}>
                  <Box sx={swatchHatch} />
                </Box>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500, lineHeight: 1.2 }}>{name}</Typography>
                <Typography sx={{ fontFamily: '"DM Mono", monospace', fontSize: '0.6875rem', color: 'text.disabled' }}>{dark}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
