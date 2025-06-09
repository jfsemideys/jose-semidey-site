// src/pages/Resume.tsx
import React, {useRef, useEffect, useState} from 'react';
import {contactInfo} from '../data/contactInfo';
// import { personalInfo } from '../data/types/personalInfo';
import { education } from '../data/education';
import {experience} from '../data/experience';
import { summary } from '../data/summary';
import { skills } from '../data/skills';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import ResumeBox from '../components/styled-components/ResumeBox';
import ResumeHeader from '../components/styled-components/ResumeHeader';
import ExternalLink from '../components/ExternalLink';
import useResumePDF from '../hook/resumePDF';
import ResumeSummary from '../components/ResumeSummary';
import ResumeSkills from '../components/ResumeSkills';
import ResumeEducation from '../components/ResumeEducation';
import ResumeExperience from '../components/ResumeExperience';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { renderMuiIconToBase64 } from '../utils/renderMuiIconToBase64';

const Resume: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const {
    name,
    email,
    phone,
    linkedInUrl,
    gitHubUrl
  } = contactInfo;

  const [icons, setIcons] = useState<{ [key: string]: string }>();
  const resumePDF = icons ? useResumePDF('jose semidey resume.pdf', icons) : null;


  useEffect(() => {
    const loadIcons = async () => {
      const school = await renderMuiIconToBase64(<SchoolIcon style={{ fontSize: 20 }} />);
      const work = await renderMuiIconToBase64(<EngineeringIcon style={{ fontSize: 20 }} />);
      const workOutlined = await renderMuiIconToBase64(<EngineeringOutlinedIcon style={{ fontSize: 20 }} />);
      const checkBox = await renderMuiIconToBase64( 
        <Box style={{ color: 'green', fontSize: 20 }}>
          <CheckBoxIcon sx={{ color: 'inherit', fontSize: 'inherit' }} />
        </Box>);
      setIcons({ school, work, workOutlined, checkBox });
    };
    loadIcons();
  }, []);


  const handleDownload = async () => {
    if (!resumePDF) return null;

    const {addHeader, addSummary, addEducation, addExperience, save} = resumePDF;
    addHeader(contactInfo);
    addSummary(summary);
    addEducation(education);
    addExperience(experience);
    save();
  }


  return (
    <ResumeBox>
      <Box  ref={contentRef}>
        <ResumeHeader>
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="body1" component="h6" fontWeight="bold">
            {email} | {phone}
          </Typography>
          <ExternalLink href={linkedInUrl}>
            <Typography variant="body1" component="h6" fontWeight="bold">
              {linkedInUrl}
            </Typography>
          </ExternalLink>
          <ExternalLink href={gitHubUrl}>
            <Typography variant="body1" component="h6" fontWeight="bold">
              {gitHubUrl}
            </Typography>
           </ExternalLink>
        </ResumeHeader>
        <Box mt={3}>
          <ResumeSummary
            summary={summary}
          />
          <ResumeSkills
            skills={skills}
          />
          <ResumeEducation 
            titles={education}
          />
          <ResumeExperience 
            experience={experience}
          />
        </Box>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center'}}>
          <Button
            variant="outlined"
            onClick={handleDownload}
            data-html2canvas-ignore="true"
          >
            Download PDF
          </Button>
          </Box>
        </Box>
        <Box>
    </Box>
    </ResumeBox>
  );
};

export default Resume;
