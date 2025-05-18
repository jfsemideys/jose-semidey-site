// src/pages/Resume.tsx
import React from 'react';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack,
  Button
} from '@mui/material';

const Resume: React.FC = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        Resume
      </Typography>

      {/* Education */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Education
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List>
        <ListItem disablePadding>
          <ListItemText
            primary="Master of Science in Computer Science"
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary="Bachelor of Science in Electrical Engineering"
          />
        </ListItem>
      </List>

      {/* Experience */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Experience
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List>
        {[
          {
            title: 'Senior Software Developer',
            company: 'Vanco',
            dates: 'June 2022 – Present',
            location: 'Remote',
            description: [
              'Developed and maintained applications for managing donation campaigns.',
              'Used React Hooks and .NET/C# to deliver new features.',
              'Integrated Azure services like Cosmos DB and Blob Storage.',
            ],
          },
          {
            title: 'Senior Software Engineer',
            company: 'TaxAct',
            dates: 'Jan 2021 – May 2022',
            location: 'Remote',
            description: [
              'Built authentication features (login, password recovery, MFA).',
              'Used Angular, React, and .NET Core.',
              'Collaborated with AWS infrastructure teams.',
            ],
          },
          {
            title: 'Software Engineer',
            company: 'Chevron',
            dates: 'Apr 2018 – Dec 2020',
            location: 'Houston, TX',
            description: [
              'Created dashboards to manage IT infrastructure.',
              'Optimized performance of frontend and backend systems.',
            ],
          },
          {
            title: 'Senior Software Developer',
            company: 'Permian CC',
            dates: 'Mar 2017 – Apr 2018',
            location: 'Remote',
            description: [
              'Developed healthcare systems for scheduling and billing.',
              'Modernized legacy systems using Angular and EF.',
            ],
          },
          {
            title: 'Software Developer',
            company: 'Kestra Financial',
            dates: 'Aug 2014 – Mar 2017',
            location: 'Austin, TX',
            description: [
              'Worked on financial systems for account management.',
              'Built APIs and integrated third-party services.',
            ],
          },
        ].map((job, index) => (
          <ListItem key={index} alignItems="flex-start" sx={{ mb: 2 }}>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight="bold">
                  {job.title} @ {job.company}
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="body2" color="text.secondary">
                    {job.dates} | {job.location}
                  </Typography>
                  <ul>
                    {job.description.map((point, i) => (
                      <li key={i}>
                        <Typography variant="body2">{point}</Typography>
                      </li>
                    ))}
                  </ul>
                </>
              }
            />
          </ListItem>
        ))}
      </List>

      {/* Skills */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Skills
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {[
          'React',
          'TypeScript',
          'Material UI',
          'Redux',
          'C#',
          '.NET Core',
          'Azure',
          'AWS',
          'Entity Framework',
          'SQL Server',
          'PostgreSQL',
          'Docker',
          'CI/CD',
          'Selenium',
          'Python',
          'GO',
        ].map((skill) => (
          <Chip key={skill} label={skill} color="primary" variant="outlined" sx={{ mb: 1 }} />
        ))}
      </Stack>

      {/* Download Button */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant="outlined"
          href="/resume.pdf"
          target="_blank"
          download
        >
          Download PDF
        </Button>
      </Box>
    </Box>
  );
};

export default Resume;
