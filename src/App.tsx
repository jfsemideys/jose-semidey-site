// src/App.tsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import AppRoutes from './routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer'

let theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          textTransform: 'none'
        },
      },
    },
  },typography: {
    body1: {
      fontSize: '1.2rem',
    }
  }
});
theme = responsiveFontSizes(theme);

const App: React.FC = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar />
        <AppRoutes />
        <Footer/>
    </ThemeProvider>
    </>
  );
};

export default App;
