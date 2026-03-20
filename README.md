# OpenMower MUI Theme

Material UI v6 theme for the [OpenMower](https://github.com/ClemensElflein/OpenMower) open-source RTK GPS robotic lawn mower project.

**Live demo →** `https://<your-org>.github.io/<this-repo>/`

---

## Quick start — new project

### 1. Install dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Add the fonts to your `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### 2. Copy the theme

Copy the `src/theme/` directory into your project. It contains:

| File | Purpose |
|------|---------|
| `tokens.json` | Single source of truth for all design tokens |
| `palette.ts` | MUI `PaletteOptions` built from tokens |
| `typography.ts` | DM Sans type scale |
| `components.ts` | Per-component style overrides |
| `index.ts` | `openMowerTheme` export + re-exported `brand` tokens |

Optionally copy `src/components/` for the logo components.

### 3. Wrap your app

```tsx
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { openMowerTheme } from './theme'

export default function App() {
  return (
    <ThemeProvider theme={openMowerTheme}>
      <CssBaseline />
      {/* your app */}
    </ThemeProvider>
  )
}
```

### 4. Use the logo

```tsx
import { OpenMowerLogo } from './components/OpenMowerLogo'
import { OpenMowerIcon } from './components/OpenMowerIcon'

// Full wordmark — scales to container width
<OpenMowerLogo color="white" />          // on dark bg
<OpenMowerLogo color="#111412" />        // on light / green bg

// Square icon mark — for nav, app icons, favicons
<OpenMowerIcon size={32} color="white" />
```

### 5. Access design tokens directly

```tsx
import { brand } from './theme'

// Use in sx props
<Box sx={{ bgcolor: brand.surface2, border: `1px solid ${brand.border}` }} />

// Or import the full token object
import tokens from './theme/tokens.json'
```

---

## AI integration

The file `public/openmower-ai-tokens.json` (also downloadable from the live demo) contains the complete design system in a structured format designed for AI consumption. It includes:

- All color tokens with hex values and usage notes
- Typography scale with sizes, weights, and letter-spacing
- Component patterns (button styles, card surfaces, etc.)
- CSS custom properties mapping
- Tailwind config snippet
- MUI usage snippet

### Using with the `theme-factory` skill

`public/openmower-theme-factory.json` is formatted for the `anthropic-skills:theme-factory` Claude Code skill. Reference it when applying the OpenMower look to HTML artifacts:

> *"Apply the OpenMower theme from openmower-theme-factory.json to this artifact"*

---

## Running locally

```bash
# Install dependencies (requires Node 18+)
npm install

# Start dev server with HMR
npm run dev
# → http://localhost:5173
```

> **Docker (no local Node):** The dev server can run in Docker — see `.claude/launch.json`.

---

## Generating assets

```bash
# Generate AI token files (public/openmower-ai-tokens.json etc.)
npm run generate:tokens

# Generate brand guide PDF (requires a built app + running preview server)
npm run build
npm run preview &
npm run generate:pdf
# → dist/openmower-brand-guide.pdf

# All at once
npm run generate
```

---

## CI / GitHub Pages

Push to `main` to trigger the CI workflow (`.github/workflows/ci.yml`):

1. **Token generation** — rebuilds `openmower-ai-tokens.json` and `openmower-theme-factory.json`
2. **Vite build** — bundles the demo app with the correct GH Pages base path
3. **PDF generation** — headless Chrome renders the demo and exports a PDF
4. **GitHub Pages deploy** — demo is published to `https://<org>.github.io/<repo>/`

The PDF is also uploaded as a build artifact and retained for 30 days.

**First-time setup:** Enable GitHub Pages in your repo settings → *Pages* → Source: **GitHub Actions**.

---

## Design tokens at a glance

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#4CAF50` → `#388E3C` | Buttons, links, focus rings |
| Accent | `#2CC76B` | Tab indicators, labels, highlights |
| Lime | `#ACFF5A` | Code, callouts, secondary chips |
| Background | `#111412` | App shell |
| Surface | `#181C19` / `#1F2420` / `#262C28` | Cards, panels, elevated surfaces |
| Text | `#EBEBEB` / `#8A9490` / `#5C6762` | Primary / secondary / disabled |
| Font | DM Sans + DM Mono | All UI text + code |
| Radius | 12px | Base border radius |

---

## License

Brand assets © OpenMower contributors — CC BY-NC-SA 4.0.
Theme code — MIT.
