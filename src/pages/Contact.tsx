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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You could send this data to an API or service like Formspree
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ py: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Contact Me
      </Typography>

      <Typography variant="body1" paragraph>
        Feel free to reach out via this form or directly at{' '}
        <Link href="mailto:jfsemideys@gmail.com">jfsemideys@gmail.com</Link>. You can also connect with me on{' '}
        <Link href="https://www.linkedin.com/in/jose-semidey-5b53387" target="_blank" rel="noopener">
          LinkedIn
        </Link>.
      </Typography>

      {submitted && <Alert severity="success" sx={{ mb: 2 }}>Message sent successfully!</Alert>}

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Contact;
