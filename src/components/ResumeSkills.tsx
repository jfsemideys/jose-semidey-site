import React from 'react';
import {Typography, Divider, Chip, Stack} from '@mui/material';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

export type ResumeSkillProps  = {
    skills: string[];
}
const ResumeSkills: React.FC<ResumeSkillProps> = ({skills}) => {
   return (
   <>
    <Typography variant="h5" sx={{ mt: 4 }}>
          <BuildCircleIcon/> Skills
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {skills.map((skill: any) => (
              <Chip key={skill} label={skill} color="primary" variant="outlined" sx={{ mb: 1 }} />
            ))}
          </Stack>
   </>);
}

export default ResumeSkills;