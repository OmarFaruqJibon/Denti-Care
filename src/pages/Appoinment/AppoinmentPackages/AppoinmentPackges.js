import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Bridgework',
        time: '08.00 AM - 11.00 AM',
        space: 25,
        price: 310
    },
    {
        id: 2,
        name: 'Dental Crowns',
        time: '09.00 AM - 11.99 AM',
        space: 18,
        price: 325
    },
    {
        id: 3,
        name: 'Cavity Protection',
        time: '9.00 AM - 11.00 AM',
        space: 12,
        price: 415
    },
    {
        id: 4,
        name: 'Teeth Surgery',
        time: '9.00 AM - 12.00 PM',
        space: 15,
        price: 415
    },
    {
        id: 5,
        name: 'Teeth Cleaning',
        time: '04.00 PM - 08.00 PM',
        space: 20,
        price: 410
    },
    {
        id: 6,
        name: 'Root Canal',
        time: '07.00 PM - 09.00 PM',
        space: 12,
        price: 520
    },
    {
        id: 6,
        name: 'Root Canal',
        time: '07.00 PM - 09.00 PM',
        space: 12,
        price: 520
    },
]

const AppoinmentPackges = ({date}) => {
    return (
        <div>
            

        <Container sx={{mb:8}}>
            <Typography  sx={{ color: 'success.main', mb:8, fontWeight: 'bold', textDecoration: 'line'}} variant="p" gutterBottom  component="div">
                    Avelable appointments on - <span style={{ color: '#0288d1', fontWeight: '600'}}>{date.toDateString()}</span>
            </Typography>

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        key={booking.id}
                        booking={booking}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>

        </div>
    );
};

export default AppoinmentPackges;