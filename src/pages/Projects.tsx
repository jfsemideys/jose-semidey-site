// src/pages/Projects.tsx
import React from 'react';
import {
  Box,
  Typography,
  Grid
} from '@mui/material';

import ContentCard from '../components/ContentCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <Box sx={{ py: 14, px: 5 }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
            <ContentCard key={`pr${index}`} content={project} />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
