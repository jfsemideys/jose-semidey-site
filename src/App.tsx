// src/App.tsx
// import React from 'react';
// import { Container, } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';

import AppRoutes from './routes';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
        <Navbar />
        <AppRoutes />
    </>
  );
};

export default App;
