import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import './AllAppointments.css';

const AllAppointments = () => {


    const [appoinments, setappoinments] = useState([]);


    useEffect( () => {
        fetch('http://localhost:5000/appoinments')
        .then(res => res.json())
        .then(data=>setappoinments(data));
    },[]);

    console.log(appoinments);

    const handleDeleteBooking = id =>{
        const proceed = window.confirm('Are you sure you want to delete the appointment?');

            if(proceed){
                const url = `http://localhost:5000/appoinments/${id}`;
            fetch((url),{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                alert('Appointment Deleted Successfully.');
                const remainingCars = appoinments.filter(user => user._id !== id);
                setappoinments(remainingCars);
            })
            }
    }


    return (
      <div>

            <h2 className='App mb-5'>All Appointments</h2>

             <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">ServiceName</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {appoinments.map((appoinment) => (
                            <TableRow
                                key={appoinment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {appoinment.patientName}
                                </TableCell>
                                <TableCell align="right">{appoinment.email}</TableCell>
                                <TableCell align="right">{appoinment.phone}</TableCell>
                                <TableCell align="right">{appoinment.time}</TableCell>
                                <TableCell align="right">{appoinment.serviceName}</TableCell>
                                <TableCell align="right">{appoinment.price}</TableCell>
                                <TableCell align="right">{appoinment.date}</TableCell>

                                <TableCell align="right">
                                    <Button onClick={()=>handleDeleteBooking(appoinment._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    );
};

export default AllAppointments;