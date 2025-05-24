// src/pages/Projects.tsx
import React from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Grid,
  Avatar
} from '@mui/material';

import type {Content} from '../data/types/content';
  
type ContentCardCardProps = {
    content: Content;
  };

const ContentCard: React.FC<ContentCardCardProps> = ({content}) => {
  
    const {title, description, tech, linkName, link, demo} = content;
    const titleFirstLetter = content.title[0]
    return (
        <Grid size={{xs:12, md: 6 }}  key={content.title}>
            <Card elevation={3}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                    {titleFirstLetter}
                  </Avatar>
                }
                title={ 
                  <Typography variant="h5" gutterBottom>
                    {title}
                  </Typography> }
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {tech && tech.map((tech: string) => (
                    <Chip key={tech} label={tech} size="small" sx={{ mb: 1 }} />
                  ))}
                </Stack>
              </CardContent>
              {(link || demo) && (
                <CardActions>
                  {link && (
                    <Button
                      size="small"
                      color="primary"
                      href={link}
                      target="_blank"
                    >
                      {linkName}
                    </Button>
                  )}
                  {
                  demo && (
                    <Button
                      size="small"
                      color="secondary"
                       href="#"
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  )
                  }
                </CardActions>
              )}
            </Card>
          </Grid>
    );
}

export default ContentCard;