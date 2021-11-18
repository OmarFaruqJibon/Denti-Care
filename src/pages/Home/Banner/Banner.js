import React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import './Banner.css';

const Banner = () => {
    return (
        <Box className="banner"  sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Box className="banner-inner" >
                <Typography sx={{fontWeight: 600}} variant="h3" component="div" >
                    Your New Smile <br /> 
                    Starts here
                </Typography>

                <Typography variant="p" >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis vitae incidunt odit quos magni <br /> quidem voluptatem facere quasi, dolorum nesciunt.
                </Typography> 
                <br />

                <Button sx={{mt:4}} variant="contained">Get Appoinment</Button>
            </Box>
                
        </Box>
    );
};

export default Banner;