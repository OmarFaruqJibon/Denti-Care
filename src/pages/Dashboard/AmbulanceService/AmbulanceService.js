import React from 'react';
import './AmbulanceService.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const AmbulanceService = () => {

    const services = [
        {
            name: 'Regular Embulance',
            location: 'Area: DentCare Hospital Area',
            phone: 'Contact: +880 17500 00000',
            img: 'https://i.postimg.cc/5yQnS5H0/amb3.png'
        },
        {
            name: 'Regular Embulance',
            location: 'Area: DentCare Hospital Area',
            phone: 'Contact: +880 17500 00000',
            img: 'https://i.postimg.cc/VN4GfkQY/amb2.png'
        },
        {
            name: 'Regular Embulance',
            location: 'Area: DentCare Hospital Area',
            phone: 'Contact: +880 17500 00000',
            img: 'https://i.postimg.cc/XYW6XqhF/amb4.png'
        },
        {
            name: 'Regular Embulance',
            location: 'Area: DentCare Hospital Area',
            phone: 'Contact: +880 17500 00000',
            img: 'https://i.postimg.cc/G2hfGsJ8/amb5.png'
        },
        {
            name: 'Regular Embulance',
            location: 'Area: DentCare Hospital Area',
            phone: 'Contact: +880 17500 00000',
            img: 'https://i.postimg.cc/2SRXTt7f/amb6.png'
        },
        {
            name: 'Regular Embulance',
            location: 'Area: DentCare Hospital Area',
            phone: 'Contact: +880 17500 00000',
            img: 'https://i.postimg.cc/rmPf4Zw3/amb7.png'
        },
        {
            name: 'Regular Embulance',
            location: 'Area: DentCare Hospital Area',
            phone: 'Contact: +880 17500 00000',
            img: 'https://i.postimg.cc/13G7dKvV/amb8.png'
        },
        {
            name: 'Regular Embulance',
            location: 'Area: DentCare Hospital Area',
            phone: 'Contact: +880 17500 00000',
            img: 'https://i.postimg.cc/G3BC5ZGB/amn9.png'
        },
        {
            name: 'Regular Embulance',
            location: 'Area: DentCare Hospital Area',
            phone: 'Contact: +880 17500 00000',
            img: 'https://i.postimg.cc/nzzdCfpq/amb1.png'
        }
    ];


    return (
        <div>
            
            <h1 className='App mb-5'>Ambulance on Emergency</h1>


            <p>Need emergency ambulance service near you? DentCare has the reliable high standard ambulance services near you to help you out in your hours of need to go anywhere in Bangladesh. </p>

            <p> 
                <strong>Ambulance Type: </strong> <br />
                 
                <ul>
                    <li>Emergency Ambulance</li>
                    <li>Ambulance with Life Support</li>
                    <li>Freezing Ambulance</li>
                </ul>
                
            
            </p>

            <p className='mt-8'> 
                <strong>Terms And Pricing:  </strong> <br />
                 
                <ul>
                    <li>Payment: After service completion- respective customers will pay through online or COD. After payment please make sure, you have received the SMS containing the money receipt.</li>
                    <li>Pricing may vary depending on the distance of travel</li>
                    <li>Waiting for charge will be approximately BDT 700/Hour</li>
                </ul>
                
            
            </p>

            <p className='mt-8'> 
                <strong>Price Includes:  </strong> <br />
                <ul>
                    <li>Service Charge</li>
                    <li>Fuel Cost</li>
                    <li>Driver Allowance</li>
                </ul>      
            </p>

            <p className='mt-8'> 
                <strong>Price Excludes:  </strong> <br />
                <ul>
                    <li>Waiting Charge</li>
                    <li>Toll or Parking Charge</li>
                </ul>      
            </p>



            <Box data-aos="fade-right"  data-aos-duration="1000"  data-aos-delay="200" className="App" sx={{ flexGrow: 1, mt:8 }}>
                <Container>
                   
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>

                            <Card style={{ margin: '0 auto'}} sx={{ maxWidth: 345, boxShadow: 0 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                                image={service.img}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold'}}>
                                                    {service.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {service.location}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {service.phone}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>



                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>




        </div>
    );
};

export default AmbulanceService;