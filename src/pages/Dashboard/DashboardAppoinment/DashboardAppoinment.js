import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

const DashboardAppoinment = ({ date }) => {
    const {user} = useAuth();
    const [appoinments, setAppoinments] = useState([]);
    useEffect(()=>{
        const url = `https://dent-care-server.onrender.com/appoinments/find?email=${user.email}&date=${date.toLocaleDateString()}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAppoinments(data));
    },[date, user.email]);
    // console.log(appoinments);
    
    
    return (
        <div>
            
            <Typography style={{marginBottom: "50px"}} sx={{ color: '#000', fontWeight: 'bold'}} variant="p">
                {/* Booked appointments - {appoinments.length} */}
                Booked appointments on    <span style={{color: "#1976d2"}}> {date.toLocaleDateString()} </span> 
            </Typography>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Services</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {appoinments.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">{row.serviceName}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                            <TableCell align="right">{row.payment ? "Paid":
                                <Link style={{textDecoration: 'none'}} to={`/dashboard/payment/${row._id}`}><Button variant="contained">Pay</Button></Link>
                                }</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    );
};
export default DashboardAppoinment;