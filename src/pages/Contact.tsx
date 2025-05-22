// src/pages/Contact.tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Link,
} from '@mui/material';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => (
   <Box 
      sx={{ py: 0,  
      display: 'flex', 
      flexDirection: 'column', 
      justifyContext:'center', 
      alignItems:'center' ,
      width: "100vw"
      }}>
    <ContactForm />
   </Box>
);

export default Contact;
