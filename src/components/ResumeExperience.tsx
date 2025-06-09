import React from 'react';
import {Typography, Divider, List, ListItem, ListItemText} from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CheckedListItem from './CheckedListItem';
import type { Experience } from '../data/experience';

export type ResumeExperienceProps  = {
    experience: Experience[];
}
const ResumeExperience: React.FC<ResumeExperienceProps> = ({experience}: Experience[] | any) => {
   return (
   <>
        <Typography variant="h5" sx={{ mt: 4 }}>
          <EngineeringIcon /> Experience
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
            {experience.map((job: Experience, index: number | any) => (
              <ListItem 
                key={index} 
                alignItems="flex-start" 
                sx={{ 
                  mb: 2, 
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body1" fontWeight="bold">
                     <EngineeringOutlinedIcon /> {job.title} @ {job.company}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {job.dates} | {job.location}
                      </Typography>
                      <List>
                        {job.description.map((text, i) => (
                          <CheckedListItem text={text} key={`des-${i}`} />
                        ))}
                      </List>
                    </>
                  }
                />
              </ListItem>
            ))}
           
        </List>
   </>);
}

export default ResumeExperience;