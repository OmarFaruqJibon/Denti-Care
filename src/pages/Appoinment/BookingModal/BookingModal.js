import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Fade } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({open,handleClose,booking,date}) => {
    const {user} = useAuth();
    const initialInfo = {patientName:user.displayName, email:user.email, phone: ''};
    const [userInfo, setUserInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...userInfo};
        newInfo[field] = value;
        setUserInfo(newInfo);
    }
    // console.log(userInfo)
    

    const handleSubmitModal = e => {
        const appoinment = {
            ...userInfo,
            time: booking.time,
            serviceName: booking.name,
            price: booking.price,
            date: date.toLocaleDateString()
        }
        console.log(appoinment)
        fetch('http://localhost:5000/appoinments',{
            method: "POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(appoinment)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.insertedId){
                alert('Booking successfully');
            }
        })
        handleClose();
        
        e.preventDefault();
      }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    {booking.name}
                </Typography>

                <form onSubmit={handleSubmitModal}>
                    <TextField
                        disabled
                        sx={{width: '90%', m:1}}
                        id="filled-size-small"
                        defaultValue={booking.time}
                        variant="filled"
                        size="small"
                    />
                    <TextField
                        sx={{width: '90%', m:1}}
                        id="filled-size-small"
                        name="patientName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        variant="filled"
                        size="small"
                    />
                    <TextField
                        sx={{width: '90%', m:1}}
                        id="filled-size-small"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        variant="filled"
                        size="small"
                    />
                    <TextField
                        sx={{width: '90%', m:1}}
                        id="filled-size-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        placeholder="Phone no"
                        variant="filled"
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{width: '90%', m:1}}
                        id="filled-size-small"
                        defaultValue={date.toDateString()}
                        variant="filled"
                        size="small"
                    />
                    <Button type="submit" variant="contained">Book</Button>
                </form>

            </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;