import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SectionHeader } from '../components/SectionHeader'
import { OpenMowerLogo } from '../../components/OpenMowerLogo'
import { OpenMowerIcon } from '../../components/OpenMowerIcon'
import { brand } from '../../theme'

function LogoCard({
  bg,
  border,
  label,
  labelColor = brand.text3,
  children,
}: {
  bg: string
  border?: string
  label: string
  labelColor?: string
  children: React.ReactNode
}) {
  return (
    <Box
      sx={{
        borderRadius: 4,
        p: '44px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 210,
        bgcolor: bg,
        border: border ? `1px solid ${border}` : 'none',
        gap: 2.5,
      }}
    >
      {children}
      <Typography
        variant="caption"
        sx={{ color: labelColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}
      >
        {label}
      </Typography>
    </Box>
  )
}

export function LogoSection() {
  return (
    <Box>
      <SectionHeader label="01 — Brand" title="Logo Usage" />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 4 }}>
        <LogoCard bg={brand.dark} border={brand.border} label="On deep forest">
          <Box sx={{ width: '100%', maxWidth: 340 }}>
            <OpenMowerLogo color="white" />
          </Box>
        </LogoCard>

        <LogoCard bg={brand.green} label="On mow green" labelColor="rgba(0,0,0,0.45)">
          <Box sx={{ width: '100%', maxWidth: 340 }}>
            <OpenMowerLogo color={brand.dark} />
          </Box>
        </LogoCard>

        <LogoCard bg={brand.surface3} border={brand.border2} label="On surface">
          <Box sx={{ width: '100%', maxWidth: 340 }}>
            <OpenMowerLogo color="white" />
          </Box>
        </LogoCard>

        <LogoCard bg="#ffffff" border="#e0ece5" label="On white" labelColor="#7A9E88">
          <Box sx={{ width: '100%', maxWidth: 340 }}>
            <OpenMowerLogo color={brand.dark} />
          </Box>
        </LogoCard>
      </Box>

      {/* App icon sizes */}
      <Typography variant="overline" color="text.disabled" sx={{ display: 'block', mb: 2 }}>
        App Icon
      </Typography>
      <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-end', flexWrap: 'wrap' }}>
        {[
          { size: 120, radius: '26px', label: '120' },
          { size: 76, radius: '17px', label: '76' },
          { size: 48, radius: '11px', label: '48' },
          { size: 32, radius: '7px', label: '32' },
        ].map(({ size, radius, label }) => (
          <Box key={size} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: size,
                height: size,
                borderRadius: radius,
                bgcolor: brand.green,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <OpenMowerIcon color="white" size={Math.round(size * 0.62)} />
            </Box>
            <Typography variant="caption" color="text.disabled" sx={{ fontFamily: '"DM Mono", monospace' }}>
              {label}px
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
