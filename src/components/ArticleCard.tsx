// src/components/ArticleCard.tsx
import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Button,
  Grid, 
} from '@mui/material';

export type Article = {
  title: string;
  description: string;
  link: string;
};

type ArticleCardProps = {
  article: Article;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const title: string = article.title.length <= 50
    ? article.title
    : article.title.slice(0, 50) + '...';
  const articleFirstLetter = title[0]
  return (
    <Grid size={{xs:12, md: 6 }}  key={article.title}>
    <Card elevation={3}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
            {articleFirstLetter}
          </Avatar>
        }
        title={ 
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography> }
        />
      <CardContent>
        <Typography variant="body1" color="text.secondary" paragraph>
          {article.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button
        size="small"
        color="primary"
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read on LinkedIn
      </Button>
      </CardActions>
    </Card>
  </Grid>
  );
};

export default ArticleCard;
