import React from 'react';
import {Typography, Divider, List, ListItem, ListItemText} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export type ResumeEducationProps  = {
    titles: string[];
}
const ResumeEducation: React.FC<ResumeEducationProps> = ({titles}: any) => {
    return (
   <>
     <Typography variant="h5" sx={{ mt: 4 }}>
            <SchoolIcon /> Education
          </Typography>
          <Divider sx={{ mb: 2 }} />
            <List>
                {
                    titles.map((title: string | any, index:number) => {
                       return ( 
                        <ListItem key={`t-${index}`} disablePadding>
                            <ListItemText
                                primary={title}
                            />
                        </ListItem>)
                        
                    })
                }
            </List>
   </>);
}

export default ResumeEducation;