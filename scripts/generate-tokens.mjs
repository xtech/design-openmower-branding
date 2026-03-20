/**
 * Generates AI-optimized design token files from tokens.json.
 * Outputs to public/ so they are served by the demo and included in the GH Pages build.
 *
 * Usage: node scripts/generate-tokens.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const tokens = JSON.parse(readFileSync(join(root, 'src/theme/tokens.json'), 'utf8'))

mkdirSync(join(root, 'public'), { recursive: true })

// ── 1. Full AI-optimized tokens file ──────────────────────────────────────────
// Includes everything an AI needs to understand and apply the design system.
const aiTokens = {
  _instructions: [
    "This file describes the OpenMower design system for AI consumption.",
    "When styling components, use these tokens to match the brand identity.",
    "The system is built on Material UI v6 with a dark-mode graphite + green theme.",
    "Primary interactive color: #4CAF50 (Material Green 500) with white text.",
    "Brand accent (decorative only): #2CC76B (Mow Green).",
    "Always use DM Sans for UI text and DM Mono for code/monospace."
  ],
  ...tokens,
  cssVariables: {
    "--color-primary":        tokens.colors.primary.main,
    "--color-primary-light":  tokens.colors.primary.light,
    "--color-primary-dark":   tokens.colors.primary.dark,
    "--color-accent":         tokens.colors.accent.green,
    "--color-lime":           tokens.colors.accent.lime,
    "--color-bg":             tokens.colors.background.default,
    "--color-surface":        tokens.colors.background.paper,
    "--color-surface-2":      tokens.colors.background.surface2,
    "--color-surface-3":      tokens.colors.background.surface3,
    "--color-border":         tokens.colors.border.subtle,
    "--color-border-2":       tokens.colors.border.default,
    "--color-text":           tokens.colors.text.primary,
    "--color-text-secondary": tokens.colors.text.secondary,
    "--color-text-disabled":  tokens.colors.text.disabled,
    "--color-error":          tokens.colors.semantic.error,
    "--color-warning":        tokens.colors.semantic.warning,
    "--color-info":           tokens.colors.semantic.info,
    "--color-success":        tokens.colors.semantic.success,
    "--font-sans":            `"${tokens.typography.fontFamily}", sans-serif`,
    "--font-mono":            `"${tokens.typography.monoFamily}", monospace`,
    "--radius":               `${tokens.shape.borderRadius}px`,
  },
  tailwindConfig: {
    _note: "Paste into tailwind.config.js → theme.extend",
    colors: {
      primary:    { DEFAULT: tokens.colors.primary.main, light: tokens.colors.primary.light, dark: tokens.colors.primary.dark },
      accent:     tokens.colors.accent.green,
      lime:       tokens.colors.accent.lime,
      bg:         tokens.colors.background.default,
      surface:    tokens.colors.background.paper,
      "surface-2": tokens.colors.background.surface2,
      "surface-3": tokens.colors.background.surface3,
      border:     tokens.colors.border.subtle,
      "border-2": tokens.colors.border.default,
      error:      tokens.colors.semantic.error,
      warning:    tokens.colors.semantic.warning,
      info:       tokens.colors.semantic.info,
      success:    tokens.colors.semantic.success,
    },
    fontFamily: {
      sans: [`"${tokens.typography.fontFamily}"`, 'sans-serif'],
      mono: [`"${tokens.typography.monoFamily}"`, 'monospace'],
    },
    borderRadius: { brand: `${tokens.shape.borderRadius}px` },
  },
  muiUsage: {
    _note: "Minimal snippet to apply this theme in a React + MUI project",
    install: "npm install @mui/material @emotion/react @emotion/styled",
    snippet: [
      "import { ThemeProvider } from '@mui/material/styles'",
      "import CssBaseline from '@mui/material/CssBaseline'",
      "import { openMowerTheme } from './theme'  // copy src/theme/ into your project",
      "",
      "export default function App() {",
      "  return (",
      "    <ThemeProvider theme={openMowerTheme}>",
      "      <CssBaseline />",
      "      {/* your app */}",
      "    </ThemeProvider>",
      "  )",
      "}"
    ]
  }
}

writeFileSync(
  join(root, 'public/openmower-ai-tokens.json'),
  JSON.stringify(aiTokens, null, 2),
  'utf8'
)
console.log('✓ public/openmower-ai-tokens.json')

// ── 2. theme-factory compatible file ─────────────────────────────────────────
// Compatible with anthropic-skills:theme-factory — import or reference this
// file when asking the skill to apply the OpenMower theme to an artifact.
const themeFactory = tokens.themeFactory
writeFileSync(
  join(root, 'public/openmower-theme-factory.json'),
  JSON.stringify(themeFactory, null, 2),
  'utf8'
)
console.log('✓ public/openmower-theme-factory.json')

console.log('Done.')
