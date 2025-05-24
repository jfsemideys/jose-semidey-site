// src/pages/Articles.tsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ContentCard from '../components/ContentCard';
import {articles} from '../data/articles';

const Articles: React.FC = () => (
  <Box sx={{ py: 14, px: 5 }}>
    <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
      Articles
    </Typography>
  <Grid container spacing={3}>
    {articles.map((article) => (
      <ContentCard content={article} />
    ))}
  </Grid>
</Box>

);

export default Articles;
