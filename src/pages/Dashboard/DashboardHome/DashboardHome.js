import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import DashboardAppoinment from '../DashboardAppoinment/DashboardAppoinment';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography  sx={{ color: '#000', mb:4, fontWeight: 'bold'}} variant="p">
                Select a Date
            </Typography>
                <Calender
                date={date}
                setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} md={6}>
                <DashboardAppoinment  date={date}></DashboardAppoinment>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;