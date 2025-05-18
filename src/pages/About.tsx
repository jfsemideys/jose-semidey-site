// src/pages/About.tsx
import React from 'react';
import { Box, Typography, Divider, Stack, Chip } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box p={15}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        About Me
      </Typography>

      <Typography variant="body1" paragraph>
        I'm <strong>Jose Semidey</strong>, a Full-Stack Developer with a strong foundation in both frontend and backend development.
        I specialize in building scalable web applications using <strong>React</strong>, <strong>TypeScript</strong>, <strong>.NET Core</strong>, and modern cloud technologies such as <strong>Azure</strong> and <strong>AWS</strong>.
      </Typography>

      <Typography variant="body1" paragraph>
        With a background in <strong>Computer Science</strong> and <strong>Electrical Engineering</strong>, I bring a unique combination of analytical thinking and engineering discipline to my work.
        I’m passionate about clean code, performance optimization, and building user-friendly applications that make a real impact.
      </Typography>

      <Typography variant="body1" paragraph>
        I've contributed to high-scale projects in industries such as <strong>finance</strong>, <strong>healthcare</strong>, and <strong>energy</strong>—delivering authentication systems, data-driven dashboards, and mission-critical APIs.
        I thrive in agile teams and continuously seek opportunities to learn and grow.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" component="h3" gutterBottom>
        Core Technologies
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        {[
          'React',
          'Redux',
          'TypeScript',
          'Material UI',
          '.NET Core',
          'C#',
          'Azure',
          'AWS',
          'SQL Server',
          'PostgreSQL',
          'Entity Framework',
          'CI/CD',
          'Docker',
        ].map((tech) => (
          <Chip key={tech} label={tech} color="primary" variant="outlined" sx={{ mb: 1 }} />
        ))}
      </Stack>
    </Box>
  );
};

export default About;
