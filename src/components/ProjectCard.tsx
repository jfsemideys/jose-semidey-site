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

type Project = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
  };

  type ProjectCardProps = {
    project: Project;
  };

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
  // const {project} = props;
    const projectFirstLetter = project.title[0]
    return (
        <Grid size={{xs:12, md: 6 }}  key={project.title}>
            <Card elevation={3}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                    {projectFirstLetter}
                  </Avatar>
                }
                title={ 
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography> }
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {project.tech.map((tech: string) => (
                    <Chip key={tech} label={tech} size="small" sx={{ mb: 1 }} />
                  ))}
                </Stack>
              </CardContent>
              {(project.github || project.demo) && (
                <CardActions>
                  {project.github && (
                    <Button
                      size="small"
                      color="primary"
                      href={project.github}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  )}
                  {
                  project.demo && (
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

export default ProjectCard;