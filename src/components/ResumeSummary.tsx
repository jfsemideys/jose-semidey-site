import React from 'react';
import {Typography} from '@mui/material';

export type ResumeSummaryProps  = {
    summary: string;
}
const ResumeSummary: React.FC<ResumeSummaryProps> = ({summary}) => {
    return (
    <>
        <Typography variant="body1" component="h3" fontWeight="bold" >
            {summary}
        </Typography>
    </>);
}

export default ResumeSummary;