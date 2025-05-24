import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const SBox = styled(Box)(() => ({
    py: 0,  
    display: 'flex', 
    flexDirection: 'column', 
    justifyContext:'center', 
    alignItems:'center' ,
    width: "10vw"
  }));

  export default SBox;