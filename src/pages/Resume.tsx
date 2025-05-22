// src/pages/Resume.tsx
import React from 'react';
import {experience} from '../data/experience';
import { skills } from '../data/skills';
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
    <Box sx={{ py: 15, px: 2 }}>
      <Box sx={{display: 'flex', justifyContext: 'center', alignItems:'center', flexDirection: 'column' }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        Jose Semidey 
        </Typography>
        <Typography variant="h6" component="h2" fontWeight="bold">
        jfsemideys@gmail.com | 315-854-5189
        </Typography>
        <Typography variant="h6" component="h2" fontWeight="bold">
        www.linkedin.com/in/jose-semidey-5b53387
        </Typography>
        <Typography variant="h6" component="h2" fontWeight="bold">
        https://jfsemideys.github.io/jose-semidey-site/
        </Typography>
      </Box>
      
      {/* Education */}
      <Box sx={{display: 'flex', justifyContext: 'center', alignItems:'center', flexDirection: 'column' }}>
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
        {experience.map((job, index) => (
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
        {skills.map((skill) => (
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
    </Box>
  );
};

export default Resume;
