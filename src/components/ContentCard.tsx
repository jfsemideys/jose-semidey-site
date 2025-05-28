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
  Box
} from '@mui/material';

import type {Content} from '../data/types/content';
import {categories, categoryColor} from '../constants/appConstants'
  
type ContentCardCardProps = {
    content: Content;
  };

const ContentCard: React.FC<ContentCardCardProps> = ({content}) => {
  
    const {id, title, description, tech, linkName, link, demo, categoryId} = content;

    return (
        <Grid size={{xs:12, md: 4 }}  key={content.title}>
            <Card elevation={3}>
              <CardHeader
                avatar={
                  <Chip 
                    label={categories[categoryId]} 
                    sx={{
                      color:'#fff',
                      backgroundColor: categoryColor[categoryId]
                    }} 
                  />
                } 
                title={ 
                  <Box>
                    <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'noWrap',
                          width: 200
                         }}
                    >
                      {title}
                  </Typography>
                  </Box> }
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {tech && tech.map((tech: string) => (
                    <Chip 
                    key={tech} 
                    label={tech} 
                    size="small" 
                    variant="outlined"
                    sx={{ 
                      mb: 1,
                      borderColor: 'navy',
                      borderWidth: 2,
                      color:'#000'
                    }} />
                  ))}
                </Stack>
              </CardContent>
              {(
                <CardActions>
                    { 
                      id && (
                      <Button
                        size="small"
                        color="secondary"
                        href={`projects/${id}`}
                      >
                        View Details
                      </Button>)
                  }
                  {
                    link && (
                      <Button
                        size="small"
                        color="primary"
                        href={link}
                        target="_blank"
                      >
                        {linkName}
                      </Button>)
                    }
                    {
                      demo && (
                        <Button
                          size="small"
                          color="secondary"
                          href="#"
                          target="_blank"
                        >
                          Live Demo
                        </Button>)
                    }
                </CardActions>
              )}
            </Card>
          </Grid>
    );
}

export default ContentCard;