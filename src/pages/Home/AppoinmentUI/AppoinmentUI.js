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
                    src={'https://i.postimg.cc/nLmZzQ2Z/bgh.png'} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{mt:8}}>
                    
                    <Typography style={{color: 'white', fontWeight: 600}} mt={5} variant="h4">
                        Make an Appointment today
                    </Typography>
                    <Typography style={{color: 'white'}} mt={2} variant="body2">
                    Applicants requesting emergency appointments for the purpose of biometric collection must provide proof of emergency..
                    </Typography>
                    <Link style={{ textDecoration: 'none' }} to="/appoinment">
                        <Button sx={{mt:4}} variant="contained" color="success">Book Appointment</Button>
                    </Link>
                </Grid>
                
            </Grid>
         </Box>
    );
};

export default AppoinmentUI;