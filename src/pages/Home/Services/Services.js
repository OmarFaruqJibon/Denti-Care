import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: whitening
    }
]

const Services = () => {
    return (
            <Box className="App" sx={{ flexGrow: 1, mt:8 }}>
                <Container>
                    <Typography sx={{ fontWeight: 500, m: 1, color: 'primary.main' }} variant="h6" component="div">
                        OUR SERVICES
                    </Typography>
                    <Typography sx={{ fontWeight: 600, mb: 8 }} variant="h4" component="div">
                        Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Service
                                key={services.name}
                                service={service}
                            ></Service>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        
    );
};

export default Services;