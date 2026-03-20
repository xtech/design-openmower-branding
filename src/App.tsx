import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { openMowerTheme } from './theme'
import { DemoPage } from './demo/DemoPage'

export default function App() {
  return (
    <ThemeProvider theme={openMowerTheme}>
      <CssBaseline />
      <DemoPage />
    </ThemeProvider>
  )
}
