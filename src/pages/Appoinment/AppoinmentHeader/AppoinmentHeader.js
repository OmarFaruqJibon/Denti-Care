import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import bg from '../../../images/appointment-bg.png';
import Calender from '../../Shared/Calender/Calender';
import { Typography } from '@mui/material';

const AppoinmentHeader = ({date,setDate}) => {
    return (
        
        <Container sx={{my:8}}>
            <Typography  sx={{ color: 'success.main', mb:8}} variant="h4">
                Please Pick An Appoinment
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img 
                    style={{width: 600}}
                    src={bg} alt=""/>
                </Grid>
            </Grid>
        </Container>

    );
};

export default AppoinmentHeader;