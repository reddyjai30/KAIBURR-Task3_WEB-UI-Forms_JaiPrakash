// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#7B1FA2',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#00C853',
    },
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      '"Helvetica"',
      'Arial',
      'sans-serif'
    ].join(','),
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    // You can add other typography settings here.
  },
  // Add custom overrides for other components if needed
});

export default theme;
