import React from 'react';
import Alert from '@mui/material/Alert';

export type ResultMessageProps  = {
    message: string;
    severity: 'success' | 'error' | 'warning' | 'info';
}
const ResultMessage: React.FC<ResultMessageProps> = ({message, severity}) => {
   return (
    <Alert severity={severity} sx={{ mb: 2 }}>
        {message}
    </Alert>
   )
}

export default ResultMessage;