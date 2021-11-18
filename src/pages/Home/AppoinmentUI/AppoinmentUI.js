import React from 'react';
import './AppoinmentUI.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button } from '@mui/material';




const AppoinmentUI = () => {
    return (
        <Box className="appoinmentBg" sx={{ flexGrow: 1 , p: 3}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                    style={{width: 400, marginTop: '-110px', marginBottom:'-28px'}}
                    src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography style={{color: 'white'}} mt={2} variant="h6" component="h2">
                        APPOINMENT
                    </Typography>
                    <Typography style={{color: 'white', fontWeight: 600}} mt={2} variant="h4" component="h2">
                        Make an Appoinment today
                    </Typography>
                    <Typography style={{color: 'white'}} mt={2} variant="p" component="p">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quidem beatae ex officia quibusdam quia?
                    </Typography>
                    <Button sx={{mt:4}} variant="contained">Learn More</Button>
                </Grid>
            </Grid>
         </Box>
    );
};

export default AppoinmentUI;