import React from 'react';
import './AppoinmentUI.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AppoinmentUI = () => {
    return (
        <Box className="appoinmentBg" sx={{ flexGrow: 1 , p: 3}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img 
                    style={{width: 350, marginTop: '-105px', marginBottom:'-31px'}}
                    src={'https://i.postimg.cc/hPgFDZd8/clinic-physician-health-care-hospital-medicine-doctors-and-nurses-36159187319a83019fba0f9df56575b4.png'} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography style={{color: 'white'}} mt={2} variant="body1">
                        APPOINMENT
                    </Typography>
                    <Typography style={{color: 'white', fontWeight: 600}} mt={2} variant="h4">
                        Make an Appoinment today
                    </Typography>
                    <Typography style={{color: 'white'}} mt={2} variant="p" component="p">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quidem beatae ex officia quibusdam quia?
                    </Typography>
                    <Link style={{ textDecoration: 'none' }} to="/appoinment">
                        <Button sx={{mt:4}} variant="contained">Book Appoinment</Button>
                    </Link>
                </Grid>
            </Grid>
         </Box>
    );
};

export default AppoinmentUI;