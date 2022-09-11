import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from './../Service/Service';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const services = [
    {
        name: 'Teeth Braces',
        description: 'Braces have constant pressure which, over time, move teeth into the desired positions. The process loosens the tooth',
        img: 'https://i.postimg.cc/0ymRxGhg/tooth-filling_(1).png'
    },
    {
        name: 'Whitening',
        description: 'Teeth whitening is not permanent It can lasts up to 3 years – it varies from person to person. The whitening effect last as long if you smoke or drink red',
        img: 'https://i.postimg.cc/WbdcYcn1/tooth-filling_(2).png'
    },
    {
        name: 'Dental Surgery',
        description: 'Dental surgery is any of a number of medical procedures that involve artificially modifying dentition; in other words',
        img: 'https://i.postimg.cc/rF7XvZnC/dental-care.png'
    }
];

AOS.init();

const Services = () => {
    return (
            <Box data-aos="fade-right"  data-aos-duration="1000"  data-aos-delay="200" className="App" sx={{ flexGrow: 1, mt:8 }}>
                <Container>
                   
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