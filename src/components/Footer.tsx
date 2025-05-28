import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 2,
        px: 2,
        backgroundColor: '#1c1c1c',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Jose Semidey. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
