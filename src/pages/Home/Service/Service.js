import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Service = (props) => {
    const {name,description, img} = props.service;

    return (
        <Card style={{ margin: '0 auto'}} sx={{ maxWidth: 345, boxShadow: 0 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    style={{width: 'auto', height: '80px', margin: '0 auto'}}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold'}}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Service;