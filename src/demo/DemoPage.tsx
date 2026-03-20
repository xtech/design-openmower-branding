import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
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
]

export function DemoPage() {
  return (
    <>
      {/* Top nav */}
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <OpenMowerLogo style={{ height: 22, width: 'auto' }} />
          </Box>
          <IconButton
            component="a"
            href="https://github.com/ClemensElflein/OpenMower"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: 'white' }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero */}
      <Container maxWidth="lg">
        <HeroSection />
      </Container>

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
