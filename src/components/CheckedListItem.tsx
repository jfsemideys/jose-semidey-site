import {  
    Typography,
    ListItem,
    ListItemText,
    ListItemIcon } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
type CheckedListItemProps = {
    text: string;
    key:string ;
}

const CheckedListItem:  React.FC<CheckedListItemProps>= ({text, key}) => {
  return (
    <ListItem key={key} alignItems="flex-start" disableGutters sx={{ pl: 1, mb: 0.5 }}>
        <ListItemIcon sx={{ minWidth: 32, color: 'primary.main' }}>
            <CheckCircleOutlineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
            primary={
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                {text}
                </Typography>
            }
        />
    </ListItem>
  );
};

export default CheckedListItem                                                                                                                                                         ;
