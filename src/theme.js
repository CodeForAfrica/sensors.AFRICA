import { createMuiTheme } from '@material-ui/core/styles';

const FONT_FAMILY = '"Montserrat", "sans-serif"';
const HEADINGS_FONT_FAMILY = '"Anton", "sans-serif"';

const theme = createMuiTheme({
  // Green palette
  palette: {
    primary: { main: '#1a995b', light: '#2FB56B', dark: '#164B3E' },
    secondary: { main: '#424143', dark: '#2A2A2B' },
  },
  typography: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    h1: {
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    h2: {
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    h3: {
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    h4: {
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    h5: {
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    h6: {
      color: '#424143',
      fontFamily: FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    fontSmallDefault: {
      fontSize: 14,
    },
    buttonNext: {
      fontWeight: 700,
    },
    useNextVariants: true,
  },
  overrides: {
    MuiBadge: {
      badge: {
        color: '#bbb',
        fontFamily: HEADINGS_FONT_FAMILY,
        fontWeight: 500,
        textTransform: 'uppercase',
        borderRadius: 0,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
      },
    },
    MuiCard: {
      root: {
        borderRadius: 0,
        boxShadow: 'none',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#F3F3F3',
      },
    },
  },
});

export default theme;
