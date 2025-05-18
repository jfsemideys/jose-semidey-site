// src/App.tsx
import React from 'react';
// import { Container, } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';

import AppRoutes from './routes';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
        <NavBar />
        <AppRoutes />
    </>
  );
};

export default App;
