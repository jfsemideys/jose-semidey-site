import React from 'react';
import {Typography} from '@mui/material';
import ExternalLink from './ExternalLink';
import ResumeHeaderStyled from './styled-components/ResumeHeader';

export type ResumeHeaderProps  = {
    name: string;
    email: string;
    phone: string;
    linkedInUrl: string;
    gitHubUrl: string;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({name, email, phone, linkedInUrl, gitHubUrl}: any) => {
    return (
   <>
    <ResumeHeaderStyled>
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
    </ResumeHeaderStyled>
   </>);
}

export default ResumeHeader;