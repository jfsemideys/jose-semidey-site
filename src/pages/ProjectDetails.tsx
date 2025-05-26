// src/pages/ProjectDetails.tsx
import React from 'react';
import SBox from '../components/styled-components/SBox'
import { Typography } from '@mui/material';



const ProjectDetails: React.FC = () => {
  return (
    <SBox
      sx={{ py:10}}
    >
      <Typography variant="h3" component="h1" fontWeight={700}>
        Project Details
      </Typography>
    </SBox>
  );
};

export default ProjectDetails;
