import React from 'react';
import Alert from '@mui/material/Alert';

export type ResultMessageProps  = {
    message: string;
    severity: string ;
}
const ResultMessage: React.FC<ResultMessageProps> = ({message, severity}) => {
    const response = severity === 'success' 
        ? (<><Alert severity='success' sx={{ mb: 2 }}>
            {message}
          </Alert></>)
        : (<><Alert severity='error' sx={{ mb: 2 }}>
            {message}
          </Alert></>)
   return response;
}

export default ResultMessage;