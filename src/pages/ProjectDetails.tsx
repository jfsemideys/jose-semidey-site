// src/pages/ProjectDetails.tsx
import React from 'react';
import SBox from '../components/styled-components/SBox'
import { Typography, List, ListItem, ListItemIcon, ListItemText, Stack, Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';



const ProjectDetails: React.FC = () => {
   const { id } = useParams();
    console.log('id', id)
    console.log('projects', projects)
 const project = projects.find((p) => p.id === Number(id));
 console.log('project', project)
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
      <SBox>
      <Typography variant="h5" component="h3" fontWeight={700} my={3}>
        {description}
      </Typography>
      </SBox>
     
      <List>
        {
          details && 
          details.map((detail:string, index) => {
            return (
                <ListItem key={index}>
                    <ListItemIcon>
                        <CheckIcon  />
                    </ListItemIcon>
                  <ListItemText
                    primary={detail}
                  />
                </ListItem>
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
