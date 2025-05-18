// src/components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          Jose Semidey
        </Typography>
        <Box sx={{ display: 'flex'}}>
          <Button color="inherit" component={RouterLink} to="/about">About</Button>
          <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
          <Button color="inherit" component={RouterLink} to="/resume">Resume</Button>
          <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>/ 
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
