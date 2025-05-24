// src/pages/Home.tsx
import React from 'react';
import SBox from '../components/styled-components/SBox'
import { Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SBox
      sx={{ py:15}}
    >
      <Typography variant="h2" component="h1" fontWeight={700}>
        Hi, I'm Jose Semidey
      </Typography>

      <Typography variant="h5" color="text.secondary" maxWidth="600px">
        Full-Stack Developer with expertise in React, .NET, Azure, and building scalable, high-performance applications.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/projects')}
        >
          View Projects
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate('/contact')}
        >
          Contact Me
        </Button>
      </Stack>
    </SBox>
  );
};

export default Home;
