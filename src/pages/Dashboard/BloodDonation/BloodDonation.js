import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';



const BloodDonation = () => {

    const [donors, setDonors] = useState([]);


    useEffect( () => {
        fetch('http://localhost:5000/donors')
        .then(res => res.json())
        .then(data=>setDonors(data));
    },[]);

    console.log(donors);

    const handleDeleteBooking = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');

            if(proceed){
                const url = `http://localhost:5000/donors/${id}`;
            fetch((url),{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                alert('Donor Deleted Successfully.');
                const remainingCars = donors.filter(user => user._id !== id);
                setDonors(remainingCars);
            })
            }
    }

    return (
            <div>

            <h2 className='App mb-5'>Blood Donors</h2>

             <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Blood Group</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>


                    
                    <TableBody>
                        {donors.map((donor) => (
                            <TableRow
                                key={donor._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {donor.name}
                                </TableCell>
                                <TableCell align="right">{donor.phone}</TableCell>
                                <TableCell align="right">{donor.bloodGroup}</TableCell>
                                <TableCell align="right">{donor.address}</TableCell>
                                <TableCell align="right">{donor.age}</TableCell>
                                <TableCell align="right">{donor.gender}</TableCell>
                                <TableCell align="right">{donor.date}</TableCell>

                                <TableCell align="right">
                                    <Button onClick={()=>handleDeleteBooking(donor._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>










    );
};

export default BloodDonation;