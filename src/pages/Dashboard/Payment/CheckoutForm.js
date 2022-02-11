import { Box, Button, CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({appoinment}) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const {price,_id} = appoinment;

    const stripe = useStripe();
    const elements = useElements();

    useEffect( () =>{
        fetch('http://localhost:5000/create-payment-intent',{
          method: 'POST',
          headers: {'content-type' : 'application/json'},
          body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    
    setProcessing(true);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess('');
    } 
    else {
        setError('');
    }

    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: appoinment?.patientName
          },
        },
      },
    );

    if(intentError){
      setError(error.message);
      setSuccess('');
    }
    else{
      console.log(paymentIntent);
      setError('');
      setSuccess('Payment Successfully.');
      setProcessing(false);
       // save to database
       const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice('_secret')[0]
    }
    const url = `http://localhost:5000/appointments/${_id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
    })
        .then(res => res.json())
        .then(data => console.log(data));
    }

  };


    return (
        <Box sx={{mt:4}} className="App">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                { processing ? <CircularProgress/> :
                  <Button sx={{mt:4}} variant="outlined" type="submit" disabled={!stripe || success}>
                    Confirm
                </Button>}
            </form>
            {
                error && <p style={{color: 'red', textAlign:'left'}}>{error}</p>
            }
            {
                success && <p style={{color: 'green', textAlign:'left'}}>{success}</p>
            }
        </Box>
    );
};

export default CheckoutForm;