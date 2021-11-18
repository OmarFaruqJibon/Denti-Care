import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {name, time, price, space} = booking;
    return (
        <>
        <Grid className="App" item xs={12} md={6} lg={4}>
                <Paper sx={{py:3}} elevation={3}>
                <Typography sx={{ color: 'info.main', fontWeight:600}} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }} variant="caption" gutterBottom component="div">
                    {space} SPACE AVELABLE
                </Typography>
                <Typography sx={{ color: 'warning.main', fontWeight:600 }} variant="h6" gutterBottom component="div">
                   $ {price}
                </Typography>
                <Button  onClick={handleOpen} variant="contained" sx={{ mt:3 }}>BOOK APPOINMENT</Button>
                </Paper>

            </Grid>
            <BookingModal
                date={date}
                open={open}
                handleClose={handleClose}
                booking={booking}
            ></BookingModal>
        </>
        
    );
};

export default Booking;