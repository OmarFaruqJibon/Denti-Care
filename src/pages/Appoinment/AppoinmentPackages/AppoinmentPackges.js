import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Exposure therapy',
        time: '08.00 AM - 11.00 AM',
        space: 25,
        price: 310,
        doctor: 'Dr. Sam Krish'
    },
    {
        id: 2,
        name: 'Interpersonal therapy',
        time: '09.00 AM - 11.99 AM',
        space: 18,
        price: 325,
        doctor: 'Dr. Harry'
    },
    {
        id: 3,
        name: 'Mentalization-based therapy',
        time: '9.00 AM - 11.00 AM',
        space: 12,
        price: 415,
        doctor: 'Dr. Rollo'
    },
    {
        id: 4,
        name: 'Psychodynamic therapy',
        time: '9.00 AM - 12.00 PM',
        space: 15,
        price: 415,
        doctor: 'Dr. Martinez'
    },
    {
        id: 5,
        name: 'Teeth Cleaning',
        time: '04.00 PM - 08.00 PM',
        space: 20,
        price: 410,
        doctor: 'Dr. Harsh'
    },
    {
        id: 6,
        name: 'Creative arts therapy',
        time: '07.00 PM - 09.00 PM',
        space: 12,
        price: 520,
        doctor: 'Dr. Robart Lu'
    },
    {
        id: 7,
        name: 'Family therapy',
        time: '07.00 PM - 09.00 PM',
        space: 12,
        price: 700,
        doctor: 'Dr. Watson'
    },
    {
        id: 8,
        name: 'Dialectical behavior therapy',
        time: '07.00 PM - 09.00 PM',
        space: 12,
        price: 650,
        doctor: 'Dr. Annie'
    },
    {
        id: 9,
        name: 'Cognitive-behavioral therapy',
        time: '07.00 PM - 09.00 PM',
        space: 12,
        price: 1020,
        doctor: 'Dr. Jackey'
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