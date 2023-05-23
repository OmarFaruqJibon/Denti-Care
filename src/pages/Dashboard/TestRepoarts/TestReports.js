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


const TestReports = () => {


    const {user} = useAuth();
    const [reports, setReports] = useState([]);


    useEffect(()=>{
        const url = `http://localhost:5000/reports?email=${user.email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setReports(data));
    },[user.email]);

    console.log(reports);


    return (
        <div>
            <h1 className='App'>Test report</h1>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Service Taken</TableCell>
                        <TableCell align="right">Treatment On</TableCell>
                        <TableCell align="right">Report</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {reports.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.service}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.report}</TableCell>

                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>


        </div>
    );
};

export default TestReports;