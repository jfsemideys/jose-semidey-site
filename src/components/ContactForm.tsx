import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useEmail from '../hook/useEmail';

import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
} from '@mui/material';
import ResultMessage from './ResultMessage';
import MathCaptcha from './MathCaptcha';


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().min(10, 'Too short').required('Message is required'),
});

const ContactForm: React.FC = () => {
  const [severityMessage, setSeverityMessage] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);

  const sendEmail = useEmail();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values: { name: any; message: any; email: any; }) => {
      if (!captchaValid) {
        setSeverityMessage('error');
        setResultMessage('Please solve the CAPTCHA');;
        return;
      }
      const response: string | any = await sendEmail(values.name, values.email, values.message);

      if(response === 200) {
        setSeverityMessage('success');
        setResultMessage('Message sent successfully!');
      } else {
        setSeverityMessage('error');
        setResultMessage('Error sending the message.');
      }
    },
  });
  
  return (
<>
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ mx: 10, my:10, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="h5" fontWeight={600}>Contact Me</Typography>
      <Typography variant="body1" paragraph>
        Feel free to reach out via this form or directly at{' '}
        <Link href="mailto:jfsemideys@gmail.com">jfsemideys@gmail.com</Link>. You can also connect with me on{' '}
        <Link href="https://www.linkedin.com/in/jose-semidey-5b53387" target="_blank" rel="noopener">
          LinkedIn
        </Link>.
      </Typography>
      {
        resultMessage.length > 0 && 
        <ResultMessage
            severity={severityMessage} 
            message={resultMessage}
        />
      }
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={
            formik.touched.name &&
            typeof formik.errors.name === 'string'
              ? formik.errors.name
              : undefined
          }
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={
            formik.touched.email &&
            typeof formik.errors.email === 'string'
              ? formik.errors.email
              : undefined
          }
      />
      <TextField
        fullWidth
        multiline
        minRows={4}
        id="message"
        name="message"
        label="Message"
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={
            formik.touched.message &&
            typeof formik.errors.message === 'string'
              ? formik.errors.message
              : undefined
          }
      />
       <Box mt={2} display="flex" justifyContent="center">
       <MathCaptcha onValidate={setCaptchaValid} />
      </Box>
      <Button color="primary" variant="contained" type="submit">
        Send Message
      </Button>
    </Box>
    </>
  );
};

export default ContactForm;
