import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ResumeBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  }));

  export default ResumeBox;