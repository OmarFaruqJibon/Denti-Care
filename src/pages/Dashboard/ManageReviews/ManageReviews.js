import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';



const ManageReviews = () => {

    const [reviews, setReviews] = useState([]);


    useEffect( () => {
        fetch('https://dent-care-server.onrender.com/reviews')
        .then(res => res.json())
        .then(data=>setReviews(data));
    },[]);



    const handleDeleteBooking = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');

            if(proceed){
                const url = `https://dent-care-server.onrender.com/reviews/${id}`;
            fetch((url),{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                alert('Review Deleted Successfully.');
                const remainingCars = reviews.filter(user => user._id !== id);
                setReviews(remainingCars);
            })
            }
    }




    return (
        <div>
            <h4>Manage all reviews</h4>

             <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            {/* <TableCell align="right">Email</TableCell> */}
                            <TableCell align="right">Rating</TableCell>
                            <TableCell align="right">Message</TableCell>
                            <TableCell align="right">Action</TableCell>
                            <TableCell align="right">ID</TableCell>

                        </TableRow>
                    </TableHead>


                    
                    <TableBody>
                        {reviews.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.rating}</TableCell>
                                <TableCell align="right">{row.message}</TableCell>
                                <TableCell align="right">{row._id}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={()=>handleDeleteBooking(row._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageReviews;