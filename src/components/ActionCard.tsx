// src/pages/Projects.tsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from '@mui/material';

import type {ActionCardContent} from '../data/types/actionCardContent';

type ActionCardProps = {
    cardInfo: ActionCardContent
  };

const ActionCard: React.FC<ActionCardProps> = ({cardInfo}) => {
  
    const {title, link, color, external} = cardInfo;

    return (
        <Grid >
            <Card sx={{ backgroundColor: color, color: '#fff', borderRadius: '50%' }}>
                <CardActionArea
                    component={external ? 'a' : RouterLink}
                    href={external ? link : undefined}
                    to={!external ? link : undefined}
                    target={external ? '_blank' : undefined}
                    sx={{
                    height: 100,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid white'
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', fontFamily:'Share Tech' }}>
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ActionCard;