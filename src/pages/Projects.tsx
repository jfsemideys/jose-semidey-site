// src/pages/Projects.tsx
import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Grid
} from '@mui/material';


type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: 'Donation Management System',
    description:
      'Built for Vanco, this application allows users to manage, track, and analyze donation campaigns. Integrated with Azure Blob Storage and Cosmos DB.',
    tech: ['React', 'C#', '.NET Core', 'Azure'],
    github: '',
  },
  {
    title: 'Authentication System – TaxAct',
    description:
      'Created secure login, password recovery, and account features using Angular and React. Collaborated with AWS teams for cloud deployment.',
    tech: ['Angular', 'React', '.NET Core', 'AWS'],
  },
  {
    title: 'IT Infrastructure Dashboard',
    description:
      'A performance-optimized dashboard for Chevron to manage IT resources, built with React, .NET Core, and Azure cloud functions.',
    tech: ['React', 'C#', 'Azure Functions'],
  },
  {
    title: 'Healthcare Management System',
    description:
      'System for scheduling, diagnostics, and billing in mental health centers. Modernized a legacy app using Angular, Bootstrap, and Entity Framework.',
    tech: ['Angular', 'Bootstrap', 'Entity Framework'],
  },
];

const Projects: React.FC = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid size={{xs:12, md: 6 }}  key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {project.tech.map((tech) => (
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
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
