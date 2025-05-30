// src/pages/Resume.tsx
import React, {useRef} from 'react';
import {personalInfo} from '../data/personalInfo'
import {experience} from '../data/experience';
import { summary } from '../data/summary';
import { skills } from '../data/skills';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import ResumeBox from '../components/styled-components/ResumeBox';
import ResumeHeader from '../components/styled-components/ResumeHeader';
import ExternalLink from '../components/ExternalLink';
import CheckedListItem from '../components/CheckedListItem';
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

const Resume: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const {
    name,
    email,
    phone,
    linkedInUrl,
    gitHubUrl
  } = personalInfo;

  const handleDownload = async () => {
    
    if (!contentRef.current) return;

    const element = contentRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const margin = 10; // 10 mm margin
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth - 2 * margin;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let position = margin;
    let heightLeft = pdfHeight;

    pdf.addImage(imgData, 'PNG', margin, position, pdfWidth, pdfHeight);
    heightLeft -= pageHeight - 2 * margin;

    while (heightLeft > 0) {
      position = heightLeft - pdfHeight + margin;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight - 2 * margin;
    }

    pdf.save('jose-semidey-resume.pdf');
  };

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
          <Typography variant="body1" component="h3" fontWeight="bold" >
            {summary}
          </Typography>
          <Typography variant="h5" sx={{ mt: 4 }}>
           <BuildCircleIcon/> Skills
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {skills.map((skill) => (
              <Chip key={skill} label={skill} color="primary" variant="outlined" sx={{ mb: 1 }} />
            ))}
          </Stack>
          <Typography variant="h5" sx={{ mt: 4 }}>
            <SchoolIcon /> Education
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
          <EngineeringIcon /> Experience
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {experience.map((job, index) => (
              <ListItem key={index} alignItems="flex-start" sx={{ mb: 2, pageBreakInside: 'avoid',}}>
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
        </Box>
        {/* Download Button */}
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
    </ResumeBox>
  );
};

export default Resume;
