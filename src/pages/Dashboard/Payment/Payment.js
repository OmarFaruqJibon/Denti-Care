import { Typography } from '@mui/material';
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
        fetch(`http://localhost:5000/appoinments/${appoinmentId}`)
        .then(res => res.json())
        .then(data => setAppoinment(data))
    },[]);

    return (
        <div>
            <h2 className="App">Please select payment method</h2>
            <Typography variant="h6" noWrap component="div">
                Name: {appoinment.patientName}
            </Typography>
            <Typography variant="body1" noWrap component="div">
                Appoinment for: {appoinment.serviceName}
            </Typography>
            <Typography variant="body1" noWrap component="div">
                Time: {appoinment.time}
            </Typography>
            <Typography variant="body1" noWrap component="div">
                Date: {appoinment.date}
            </Typography>
            <Typography variant="h4" noWrap component="div">
                Price: ${appoinment.price}
            </Typography>

            {appoinment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appoinment = {appoinment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;