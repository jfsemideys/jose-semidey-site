import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you are looking for might have been removed or does not exist.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        component={RouterLink}
        to="/"
        sx={{ textTransform: 'none', fontWeight: 'bold' }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
