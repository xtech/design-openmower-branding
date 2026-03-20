import type { Components, Theme } from '@mui/material/styles'
import { brand } from './palette'

export const components: Components<Theme> = {
  // ── MuiCssBaseline ─────────────────────────────────────────────────
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        scrollBehavior: 'smooth',
      },
      ':root': {
        colorScheme: 'dark',
      },
      // Mono font utility class
      '.font-mono': {
        fontFamily: '"DM Mono", monospace',
      },
    },
  },

  // ── MuiButton ──────────────────────────────────────────────────────
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontWeight: 500,
        lineHeight: 1,
        transition: 'all 0.15s ease',
      },
      sizeSmall: {
        padding: '7px 15px',
        fontSize: '0.8125rem',
        borderRadius: 6,
      },
      sizeMedium: {
        padding: '10px 22px',
      },
      sizeLarge: {
        padding: '14px 30px',
        fontSize: '1.0625rem',
        borderRadius: 10,
      },
      // contained primary — Material Green 500→700 gradient
      containedPrimary: {
        color: '#ffffff',
        background: `linear-gradient(135deg, ${brand.primaryMain} 0%, ${brand.primaryDark} 100%)`,
        '&:hover': {
          background: `linear-gradient(135deg, ${brand.primaryLight} 0%, ${brand.primaryMain} 100%)`,
        },
      },
      // contained secondary — graphite
      containedSecondary: {
        color: brand.text,
        backgroundColor: brand.surface3,
        border: `1px solid ${brand.border2}`,
        '&:hover': {
          backgroundColor: brand.surface2,
          borderColor: brand.text3,
        },
      },
      // outlined secondary — graphite border
      outlinedSecondary: {
        borderColor: brand.border2,
        color: brand.text2,
        '&:hover': {
          backgroundColor: `rgba(235,235,235,0.04)`,
          borderColor: brand.text3,
        },
      },
      // text secondary — muted
      textSecondary: {
        color: brand.text2,
        '&:hover': {
          backgroundColor: `rgba(235,235,235,0.04)`,
        },
      },
      // outlined — green border
      outlinedPrimary: {
        borderWidth: 1.5,
        '&:hover': {
          backgroundColor: `rgba(44,199,107,0.08)`,
          borderWidth: 1.5,
        },
      },
      // text / ghost
      text: {
        '&:hover': {
          backgroundColor: `rgba(44,199,107,0.06)`,
        },
      },
    },
    variants: [
      {
        props: { variant: 'ghost' },
        style: {
          backgroundColor: brand.surface3,
          color: brand.text,
          border: `1px solid ${brand.border2}`,
          '&:hover': {
            borderColor: brand.green,
            backgroundColor: brand.surface3,
          },
        },
      },
    ],
  },

  // ── MuiIconButton ──────────────────────────────────────────────────
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        transition: 'all 0.15s ease',
        '&:hover': {
          backgroundColor: `rgba(44,199,107,0.08)`,
        },
      },
    },
  },

  // ── MuiChip ────────────────────────────────────────────────────────
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        fontWeight: 500,
        fontSize: '0.75rem',
      },
      colorPrimary: {
        backgroundColor: `rgba(44,199,107,0.14)`,
        color: brand.primaryMain,
        '&.MuiChip-outlined': {
          backgroundColor: 'transparent',
          borderColor: `rgba(44,199,107,0.45)`,
        },
      },
      colorSecondary: {
        backgroundColor: brand.surface3,
        color: brand.text2,
        border: `1px solid ${brand.border}`,
        '&.MuiChip-outlined': {
          backgroundColor: 'transparent',
          borderColor: brand.border2,
        },
      },
    },
  },

  // ── MuiCard ────────────────────────────────────────────────────────
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        backgroundColor: brand.surface2,
        border: `1px solid ${brand.border}`,
        borderRadius: 12,
      },
    },
  },

  // ── MuiCardContent ─────────────────────────────────────────────────
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '20px 22px',
        '&:last-child': {
          paddingBottom: '20px',
        },
      },
    },
  },

  // ── MuiPaper ───────────────────────────────────────────────────────
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        backgroundColor: brand.surface,
        border: `1px solid ${brand.border}`,
      },
      elevation0: {
        border: 'none',
      },
    },
  },

  // ── MuiAppBar ──────────────────────────────────────────────────────
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundColor: brand.surface,
        borderBottom: `1px solid ${brand.border}`,
        backgroundImage: 'none',
      },
    },
  },

  // ── MuiDrawer ──────────────────────────────────────────────────────
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: brand.surface,
        backgroundImage: 'none',
        border: 'none',
        borderRight: `1px solid ${brand.border}`,
      },
    },
  },

  // ── MuiDivider ─────────────────────────────────────────────────────
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: brand.border,
      },
    },
  },

  // ── MuiTextField / MuiOutlinedInput ────────────────────────────────
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        backgroundColor: brand.surface2,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: brand.border2,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: brand.green,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: brand.green,
          borderWidth: 1.5,
        },
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: brand.text3,
        '&.Mui-focused': {
          color: brand.green,
        },
      },
    },
  },

  // ── MuiSwitch ──────────────────────────────────────────────────────
  MuiSwitch: {
    styleOverrides: {
      root: {
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: brand.green,
          '& + .MuiSwitch-track': {
            backgroundColor: brand.greenDeep,
            opacity: 0.8,
          },
        },
      },
    },
  },

  // ── MuiCheckbox ────────────────────────────────────────────────────
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: brand.border2,
        '&.Mui-checked': {
          color: brand.green,
        },
      },
    },
  },

  // ── MuiRadio ───────────────────────────────────────────────────────
  MuiRadio: {
    styleOverrides: {
      root: {
        color: brand.border2,
        '&.Mui-checked': {
          color: brand.green,
        },
      },
    },
  },

  // ── MuiSlider ──────────────────────────────────────────────────────
  MuiSlider: {
    styleOverrides: {
      root: {
        color: brand.green,
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-rail': {
          backgroundColor: brand.border2,
          opacity: 1,
        },
        '& .MuiSlider-thumb': {
          backgroundColor: brand.primaryMain,
          '&:hover, &.Mui-focusVisible': {
            boxShadow: `0 0 0 8px rgba(44,199,107,0.16)`,
          },
        },
      },
    },
  },

  // ── MuiLinearProgress ──────────────────────────────────────────────
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 2,
        backgroundColor: brand.border,
        height: 4,
      },
      barColorPrimary: {
        backgroundColor: brand.green,
        borderRadius: 2,
      },
    },
  },

  // ── MuiCircularProgress ────────────────────────────────────────────
  MuiCircularProgress: {
    defaultProps: {
      color: 'primary',
    },
  },

  // ── MuiTab / MuiTabs ───────────────────────────────────────────────
  MuiTabs: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${brand.border}`,
      },
      indicator: {
        backgroundColor: brand.green,
        height: 2,
      },
    },
  },

  MuiTab: {
    styleOverrides: {
      root: {
        color: brand.text3,
        fontWeight: 500,
        textTransform: 'none',
        fontSize: '0.9375rem',
        '&.Mui-selected': {
          color: brand.text,
        },
      },
    },
  },

  // ── MuiMenu / MuiMenuItem ──────────────────────────────────────────
  MuiMenu: {
    styleOverrides: {
      paper: {
        backgroundColor: brand.surface2,
        border: `1px solid ${brand.border2}`,
        borderRadius: 10,
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        margin: '2px 6px',
        fontSize: '0.9375rem',
        '&:hover': {
          backgroundColor: `rgba(44,199,107,0.08)`,
        },
        '&.Mui-selected': {
          backgroundColor: `rgba(44,199,107,0.12)`,
          '&:hover': {
            backgroundColor: `rgba(44,199,107,0.16)`,
          },
        },
      },
    },
  },

  // ── MuiTooltip ─────────────────────────────────────────────────────
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: brand.surface3,
        border: `1px solid ${brand.border2}`,
        color: brand.text,
        fontSize: '0.8125rem',
        borderRadius: 8,
        padding: '6px 12px',
      },
      arrow: {
        color: brand.surface3,
      },
    },
  },

  // ── MuiAlert ───────────────────────────────────────────────────────
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        border: '1px solid',
      },
      standardSuccess: {
        backgroundColor: `rgba(44,199,107,0.1)`,
        borderColor: `rgba(44,199,107,0.25)`,
        color: brand.text,
        '& .MuiAlert-icon': { color: brand.primaryMain },
      },
      standardError: {
        backgroundColor: `rgba(255,96,64,0.08)`,
        borderColor: `rgba(255,96,64,0.2)`,
        color: brand.text,
        '& .MuiAlert-icon': { color: brand.error },
      },
      standardWarning: {
        backgroundColor: `rgba(252,199,98,0.08)`,
        borderColor: `rgba(252,199,98,0.2)`,
        color: brand.text,
        '& .MuiAlert-icon': { color: brand.warning },
      },
      standardInfo: {
        backgroundColor: `rgba(122,184,255,0.08)`,
        borderColor: `rgba(122,184,255,0.2)`,
        color: brand.text,
        '& .MuiAlert-icon': { color: brand.info },
      },
    },
  },

  // ── MuiListItemButton ──────────────────────────────────────────────
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        '&:hover': {
          backgroundColor: `rgba(44,199,107,0.06)`,
        },
        '&.Mui-selected': {
          backgroundColor: `rgba(44,199,107,0.12)`,
          '&:hover': {
            backgroundColor: `rgba(44,199,107,0.16)`,
          },
        },
      },
    },
  },

  // ── MuiBadge ───────────────────────────────────────────────────────
  MuiBadge: {
    styleOverrides: {
      badge: {
        fontWeight: 600,
      },
    },
  },

  // ── MuiTableHead ───────────────────────────────────────────────────
  MuiTableHead: {
    styleOverrides: {
      root: {
        '& .MuiTableCell-root': {
          backgroundColor: brand.surface2,
          color: brand.text3,
          fontWeight: 600,
          fontSize: '0.6875rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          borderColor: brand.border,
        },
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      root: {
        borderColor: brand.border,
      },
    },
  },

  MuiTableRow: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: `rgba(44,199,107,0.03)`,
        },
      },
    },
  },
}
