import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AOS from 'aos'
import 'aos/dist/aos.css'

export const MediaCard = ({img,effect}) => {
  // console.log("./images/"+img);
  return (
    <Card data-aos={effect} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`./images/${img}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography className='fs-base' gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography className='fs-base' variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}