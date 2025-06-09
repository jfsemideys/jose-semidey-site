import {  
    Typography,
    ListItem,
    ListItemText,
    ListItemIcon } from '@mui/material';
    import CheckBoxIcon from '@mui/icons-material/CheckBox';
type CheckedListItemProps = {
    text: string;
    key:string ;
}

const CheckedListItem:  React.FC<CheckedListItemProps>= ({text}) => {
  return (
    <ListItem alignItems="flex-start" disableGutters sx={{ pl: 1, mb: 0.5 }}>
        <ListItemIcon sx={{ minWidth: 32, color: 'primary.main' }}>
            <CheckBoxIcon fontSize="small" color="success" />
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
