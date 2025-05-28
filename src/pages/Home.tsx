// src/pages/Home.tsx
import React from 'react';
// import SBox from '../components/styled-components/SBox'
import { Typography, Grid, Box,Stack } from '@mui/material';
import ActionCard from '../components/ActionCard';
import type { ActionCardContent } from '../data/types/actionCardContent';

const navItems:ActionCardContent[] = [
  { title: 'Projects', link: '/projects', color: '#4caf50' },
  { title: 'Contact', link: '/contact', color: '#ff7043' },
  { title: 'GitHub', link: 'https://github.com/jfsemideys', color: '#42a5f5', external: true },
  { title: 'Articles', link: '/articles', color: '#ab47bc' },
  { title: 'About..', link: '/about', color: '#ffa726' },
  { title: 'Resume', link: '/resume', color: '#26c6da' },
];

const Home: React.FC = () => {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'radial-gradient(circle, rgba(27, 19, 66, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        py: 10,
      }}
    >
      <Grid container spacing={10}>
        <ActionCard cardInfo={navItems[0]} />
        <ActionCard cardInfo={navItems[1]} />
      </Grid>''
      <Grid container spacing={5} my={10} alignItems="center">
        <ActionCard cardInfo={navItems[2]} />
        <Stack>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white' }}>
        Jose Semidey
      </Typography>
      <Typography variant="h5" sx={{  color: 'white' }}>
        Full Stack Software Developer
      </Typography>
      </Stack>
        <ActionCard cardInfo={navItems[3]} />
      </Grid>
      <Grid container spacing={10}>
        <ActionCard cardInfo={navItems[4]} />
        <ActionCard cardInfo={navItems[5]} />
      </Grid>
    </Box>
  );
};

export default Home;
