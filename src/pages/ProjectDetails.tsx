// src/pages/ProjectDetails.tsx
import React from 'react';
import SBox from '../components/styled-components/SBox'
import { Typography, List, Box, Stack, Chip } from '@mui/material';
import CheckedListItem from '../components/CheckedListItem';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';



const ProjectDetails: React.FC = () => {
   const { id } = useParams();
 const project = projects.find((p) => p.id === Number(id));

 if(!project) {
    return (<h3>Project Not Found</h3>)
 }
 const {
    title,
    description,
    tech,
    details, } = project;

  return (
    <SBox
      sx={{ py:10}}
    >
      <Typography variant="h4" component="h1" fontWeight={700}>
        {title}
      </Typography>
      <Box px={20}>
        <Typography variant="h5" component="h3" fontWeight={700} my={3}>
          {description}
        </Typography>
      </Box>
     
      <List>
        {
          details && 
          details.map((detail:string, i) => {
            return (
              <CheckedListItem text={detail} key={`det-${i}`} />
            )
          }) 
        }
      </List>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {
          tech && tech.map((skill) => (
            <Chip key={skill} label={skill} color="primary" variant="outlined" sx={{ mb: 1 }} />
          ))
        }
      </Stack>
    </SBox>
  );
};

export default ProjectDetails;
