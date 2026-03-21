import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import { OpenMowerLogo } from '../components/OpenMowerLogo'
import { brand } from '../theme'

import { HeroSection } from './sections/HeroSection'
import { ColorsSection } from './sections/ColorsSection'
import { LogoSection } from './sections/LogoSection'
import { TypographySection } from './sections/TypographySection'
import { ButtonsSection } from './sections/ButtonsSection'
import { ChipsSection } from './sections/ChipsSection'
import { CardsSection } from './sections/CardsSection'
import { FormSection } from './sections/FormSection'
import { AlertsSection } from './sections/AlertsSection'
import { TableSection } from './sections/TableSection'
import { DownloadSection } from './sections/DownloadSection'

const sections = [
  <ColorsSection key="colors" />,
  <LogoSection key="logo" />,
  <TypographySection key="type" />,
  <ButtonsSection key="buttons" />,
  <ChipsSection key="chips" />,
  <CardsSection key="cards" />,
  <FormSection key="form" />,
  <AlertsSection key="alerts" />,
  <TableSection key="table" />,
  <DownloadSection key="downloads" />,
]

export function DemoPage() {
  return (
    <>
      {/* Top nav */}
      <AppBar position="sticky" sx={{
        backgroundColor: '#181C19',
        borderBottom: '1px solid #343C39',
        boxShadow: 'none',
      }}>
        <Toolbar sx={{ gap: 1 }}>
          <Box sx={{ mr: 4, display: 'flex', alignItems: 'center' }}>
            <OpenMowerLogo color="white" style={{ height: 28, width: 'auto' }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, flexGrow: 1 }}>
            {[
              { label: 'Overview', active: true },
              { label: 'Nav Item', active: false },
              { label: 'Nav Item', active: false },
              { label: 'Nav Item', active: false },
            ].map((item, i) => (
              <Button
                key={i}
                size="small"
                sx={{
                  color: item.active ? 'white' : '#9AABA5',
                  fontWeight: item.active ? 500 : 400,
                  fontSize: '0.9375rem',
                  borderBottom: item.active ? '2px solid #2CC76B' : '2px solid transparent',
                  borderRadius: 0,
                  px: 1.5,
                  '&:hover': { color: '#EBEBEB', bgcolor: 'rgba(255,255,255,0.05)' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            component="a"
            href="https://github.com/ClemensElflein/OpenMower"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: 'white', '&:hover': { color: 'white', opacity: 0.8 } }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero — full bleed */}
      <HeroSection />

      {/* Component sections */}
      {sections.map((section, i) => (
        <Box key={i} sx={{ borderTop: `1px solid ${brand.border}` }}>
          <Container maxWidth="lg" sx={{ py: 11 }}>
            {section}
          </Container>
        </Box>
      ))}

      {/* Footer */}
      <Divider />
      <Box
        component="footer"
        sx={{ py: 6, textAlign: 'center' }}
      >
        <Box sx={{ fontSize: '0.8125rem', color: 'text.disabled', lineHeight: 2 }}>
          OpenMower — Open Source RTK GPS Robotic Lawn Mower
          <br />
          Brand system · CC BY-NC-SA 4.0 ·{' '}
          <Box
            component="a"
            href="https://github.com/ClemensElflein/OpenMower"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
          >
            github.com/ClemensElflein/OpenMower
          </Box>
        </Box>
      </Box>
    </>
  )
}
