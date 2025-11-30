import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4AF37', // Metallic Gold
      light: '#FFD700',
      dark: '#B8860B',
      contrastText: '#000000',
    },
    secondary: {
      main: '#C9A961', // Softer Gold
      light: '#E6C77F',
      dark: '#8B7355',
      contrastText: '#000000',
    },
    background: {
      default: '#0A0A0A', // Deep Black
      paper: '#1A1A1A', // Lighter Black for cards
      elevation1: '#242424',
      elevation2: '#2E2E2E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D4AF37',
      disabled: '#666666',
    },
    error: {
      main: '#FF4444',
    },
    warning: {
      main: '#FFA500',
    },
    success: {
      main: '#00C853',
    },
    info: {
      main: '#2196F3',
    },
    divider: '#333333',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#D4AF37',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#D4AF37',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#D4AF37',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(212, 175, 55, 0.1)',
    '0px 4px 8px rgba(212, 175, 55, 0.15)',
    '0px 8px 16px rgba(212, 175, 55, 0.2)',
    '0px 12px 24px rgba(212, 175, 55, 0.25)',
    '0px 16px 32px rgba(212, 175, 55, 0.3)',
    '0px 20px 40px rgba(212, 175, 55, 0.35)',
    '0px 24px 48px rgba(212, 175, 55, 0.4)',
    ...Array(17).fill('none'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.95rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(212, 175, 55, 0.4)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
          color: '#000000',
          '&:hover': {
            background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
          },
        },
        outlined: {
          borderColor: '#D4AF37',
          color: '#D4AF37',
          '&:hover': {
            borderColor: '#FFD700',
            backgroundColor: 'rgba(212, 175, 55, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1A1A',
          backgroundImage: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(26, 26, 26, 1) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: 16,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
          transition: 'all 0.3s ease',
          '&:hover': {
            border: '1px solid rgba(212, 175, 55, 0.4)',
            boxShadow: '0px 12px 32px rgba(212, 175, 55, 0.2)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1A1A',
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#333333',
            },
            '&:hover fieldset': {
              borderColor: '#D4AF37',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFD700',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#999999',
            '&.Mui-focused': {
              color: '#D4AF37',
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #333333',
        },
        head: {
          backgroundColor: '#242424',
          color: '#D4AF37',
          fontWeight: 600,
          fontSize: '0.95rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(212, 175, 55, 0.15)',
          color: '#D4AF37',
          border: '1px solid rgba(212, 175, 55, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0A0A0A',
          backgroundImage: 'linear-gradient(90deg, rgba(212, 175, 55, 0.1) 0%, rgba(10, 10, 10, 1) 100%)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0A0A0A',
          borderRight: '1px solid rgba(212, 175, 55, 0.2)',
        },
      },
    },
  },
});

export default theme;