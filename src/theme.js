import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FFBF69',
      dark: '#FF9F1C',
    },
    secondary: {
      main: '#2EC4B6',
      light: '#CBF3F0',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FDF8F4',
    },
  },
  typography: {
    fontFamily: [
      'Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default lightTheme;
