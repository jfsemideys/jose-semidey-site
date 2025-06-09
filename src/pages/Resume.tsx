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
  Button,
} from '@mui/material';
import ResumeBox from '../components/styled-components/ResumeBox';
import ResumeHeader from '../components/ResumeHeader';
import useResumePDF from '../hook/resumePDF';
import ResumeSummary from '../components/ResumeSummary';
import ResumeSkills from '../components/ResumeSkills';
import ResumeEducation from '../components/ResumeEducation';
import ResumeExperience from '../components/ResumeExperience';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
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
      const skill = await renderMuiIconToBase64(<BuildCircleIcon style={{ fontSize: 20 }} />);
      const checkBox = await renderMuiIconToBase64( 
        <Box style={{ color: 'green', fontSize: 20 }}>
          <CheckBoxIcon sx={{ color: 'inherit', fontSize: 'inherit' }} />
        </Box>);
      setIcons({ school, work, workOutlined, checkBox, skill });
    };
    loadIcons();
  }, []);


  const handleDownload = async () => {
    if (!resumePDF) return null;

    const {addHeader, addSummary, addSkills, addEducation, addExperience, save} = resumePDF;
    addHeader(contactInfo);
    addSummary(summary);
    addSkills(skills);
    addEducation(education);
    addExperience(experience);
    save();
  }


  return (
    <ResumeBox>
      <Box  ref={contentRef}>
        <ResumeHeader
          name={name}
          email={email}
          phone={phone}
          linkedInUrl={linkedInUrl}
          gitHubUrl={gitHubUrl}
        />
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
