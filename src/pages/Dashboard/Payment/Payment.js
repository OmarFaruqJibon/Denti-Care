import { Container, Grid, Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51Jw5GqE90z7ScexpVjokPfelUw8CN8ReLFL20Br69GqK8IbaJGscfsJpbwE74C83KqbfjPnhNkzL915JdCwSdOdj004V6F8uAW');
const Payment = () => {
    const [appoinment, setAppoinment] = useState({});
    const {appoinmentId} = useParams();

    useEffect( () => {
        fetch(`https://dent-care-server.onrender.com/appoinments/${appoinmentId}`)
        .then(res => res.json())
        .then(data => setAppoinment(data))
    },[]);

    return (
        <div>
            <Typography className="App" sx={{ color: 'success.main', mb:5, fontWeight: 'bold'}} variant="h5">
                Please check and confirm your payment
            </Typography>



            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Container sx={{ color: 'black'}}>
                        <Typography sx={{ pb:1}} variant="h6" noWrap component="div">
                            Name: {appoinment.patientName}
                        </Typography>
                        <Typography variant="body2" noWrap component="div">
                            Appointment for: {appoinment.serviceName}
                        </Typography>
                        <Typography variant="body2" noWrap component="div">
                            Time: {appoinment.time}
                        </Typography>
                        <Typography variant="body2" noWrap component="div">
                            Date: {appoinment.date}
                        </Typography>
                        <Typography sx={{ mt:3, color: '#ED6C02', fontWeight: 'bold'}} variant="h6" noWrap component="div">
                            Price: ${appoinment.price}
                        </Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    {appoinment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appoinment = {appoinment}
                    />
                    </Elements>}
                </Grid>
            </Grid>







           

            
        </div>
    );
};

export default Payment;