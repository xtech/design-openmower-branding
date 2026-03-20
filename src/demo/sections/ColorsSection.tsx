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
    name: 'Electric Lime',
    hex: '#ACFF5A',
    bg: brand.lime,
    use: 'Accent color — code, special callouts, notifications',
  },
  {
    name: 'Graphite',
    hex: brand.dark,
    bg: brand.dark,
    use: 'Primary background — app shell, dark mode surfaces',
  },
  {
    name: 'Pale Meadow',
    hex: '#E3F9EC',
    bg: brand.greenPale,
    infoBg: brand.surface3,
    use: 'Light mode background — documentation, print, light UIs',
  },
]

// Rebalanced: light end has less green, dark end has more green hint
const neutralScale = [
  '#EBEBEB',  // near-white, minimal green
  '#C4CECA',  // light grey, hint of green
  '#9AABA5',  // medium-light, subtle green
  '#728480',  // medium
  brand.text3, // #5C6762
  brand.border, // #3A4240
  brand.surface3, // #2C3330
  brand.surface,  // #1E2320
  brand.dark,     // #161A17 — darkest, slight green warmth
]

// Brand accent green (original #2CC76B) full ramp
const brandGreenScale = [
  '#D4F7E4', '#A8EFC5', '#72DFA2', '#3ECF7C',
  '#2CC76B', '#1EA856', '#14853F', '#0C5E2B', '#063A19',
]

// Electric Lime ramp
const limeScale = [
  '#F4FFD6', '#E8FF99', '#CCFF57', '#ACFF5A',
  '#8AE030', '#6ABF18', '#4E9A08', '#357502', '#1E5000',
]

// Semantic colours
const semanticColors = [
  { name: 'Error',   hex: brand.error,   bg: brand.error },
  { name: 'Warning', hex: brand.warning, bg: brand.warning },
  { name: 'Info',    hex: brand.info,    bg: brand.info },
  { name: 'Success', hex: brand.primaryMain, bg: brand.primaryMain },
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
      <ScaleRow label="Electric lime scale — #ACFF5A ramp" colors={limeScale} />
      <ScaleRow
        label="Dark / Neutral scale — graphite with green hint increasing toward dark end"
        colors={neutralScale}
      />

      {/* Semantic swatches */}
      <Box sx={{ mt: 1 }}>
        <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', fontWeight: 500, mb: 1.5 }}>
          Semantic colours
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {semanticColors.map(({ name, hex, bg }) => (
            <Box key={name} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: 1,
                  bgcolor: bg,
                  position: 'relative',
                  flexShrink: 0,
                  border: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                }}
              >
                <Box sx={swatchHatch} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500, lineHeight: 1.2 }}>{name}</Typography>
                <Typography sx={{ fontFamily: '"DM Mono", monospace', fontSize: '0.6875rem', color: 'text.disabled' }}>{hex}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
