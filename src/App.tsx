// src/App.tsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import AppRoutes from './routes';
import NavBar from './components/NavBar';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App: React.FC = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar />
        <AppRoutes />
    </ThemeProvider>
    </>
  );
};

export default App;
