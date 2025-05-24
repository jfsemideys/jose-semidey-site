import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Articles', to: '/articles' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Jose Semidey
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton component={RouterLink} to={item.to}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="img"
              src={logo}
              alt="JS Logo"
              sx={{
                height: 32,
                width: 32,
                mr: 1,
              }}
            />
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  flexGrow: 1,
                  fontWeight: 600,
                }}
              >
                Jose Semidey
              </Typography>
              {isMobile ? (
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.to}
                      color="inherit"
                      component={RouterLink}
                      to={item.to}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
