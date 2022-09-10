import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
// import vectorImg from '../../images/new/animate.svg';


const Contact = () => {

    const useStyle = makeStyles({
        tableBg:{
            backgroundColor: 'rgba(14, 84, 174, 1)',
            
        },
        tdClr:{
            color: 'white !important',
            borderBottom: '1px solid rgb(255 255 255 / 15%) !important'
        },
        bookBtn:{
            color: '#a15288 !important',
            background: 'white !important',
            border: 'none',
            padding: '4px 11px !important'
        },
        dentiClr:{
            color: '#bc74a5'
        },
    });
    const {tableBg, tdClr, bookBtn,dentiClr} = useStyle();



    return (
        <Box>
            <Box className="App">
                <Typography style={{color: '#115278' , fontWeight: 'bold'}} mt={2} variant="h4">
                    Contact Dent<strong className={dentiClr}>Care</strong>
                </Typography>
                <Typography sx={{mt:3}}  variant="body2">
                Globally incubate standards compliant channels before scalable benefits. Quickly
                 disseminate  <br /> superior deliverables whereas web-enabled applications.
                </Typography>
            </Box>

            <Box>
                <Container>
                <Grid my={8}  container spacing={2}>
                    <Grid  item xs={6} md={3}>
                        <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center' }}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    style={{width: '65px', margin: '0 auto'}}
                                    image={'https://i.postimg.cc/cLh2FWmp/emergency-call.png'}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom sx={{fontWeight: 'bolder' }} variant="subtitle1" color="#00145E" component="div">
                                        Emergency Call
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        515-233-4510 <br />
                                        Call us Anytime 24/7
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    
                    <Grid  item xs={6} md={3}>
                        <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center'  }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{width: '65px', margin: '0 auto'}}
                                    image={'https://i.postimg.cc/T31FNS4h/address.png'}
                                    alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom sx={{fontWeight: 'bolder' }} variant="subtitle1" color="#00145E" component="div">
                                    Address
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        250 Sifitn Ave, North San Francisco, <br />
                                        DK 45080, United States 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid  item xs={6} md={3}>
                        <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center'  }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{width: '65px', margin: '0 auto'}}
                                    image={'https://i.postimg.cc/BQqdHt5T/online-booking.png'}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom sx={{fontWeight: 'bolder' }} variant="subtitle1" color="#00145E" component="div">
                                    Book By Phone
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        515-233-4510 <br />
                                        515-233-4510
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid  item xs={6} md={3}>
                        <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center'  }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{width: '65px', margin: '0 auto'}}
                                    image={'https://i.postimg.cc/jdZBXKvG/email.png'}
                                    alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom sx={{fontWeight: 'bolder' }} variant="subtitle1" color="#00145E" component="div">
                                    Email Address
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        contact@dentcare.com <br />
                                        contact@dentcare.com
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>

            </Container>
            </Box>




        <Container sx={{ mb:8, mt:8 }}>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TableContainer className="App" component={Paper}>
                            <Table className={tableBg} sx={{ Width: 650 }} aria-label="simple table">

                            <Box  sx={{p:2, mb:3 }}>
                                <Typography  sx={{ color: 'white', paddingBottom:1, fontWeight: 'bold' }} variant="h4">
                                    Our Working Hours
                                </Typography>
                                <Typography  sx={{ color: 'white'}} variant="caption">
                                    Check out our Office hours to plan your visit
                                </Typography>
                                
                            </Box>

                                <TableBody>
                                    
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell className={tdClr} component="th" scope="row">
                                            Monday
                                        </TableCell>
                                        <TableCell className={tdClr} align="right">8AM - 9PM</TableCell>
                                        <TableCell className={tdClr} align="right">
                                            <Link style={{ textDecoration: 'none' }} to="/appoinment">
                                                <Button variant="contained" className={bookBtn}>Book <i style={{ paddingLeft: '8px'}} className="far fa-clock"></i></Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell className={tdClr} component="th" scope="row">
                                            Tuesday
                                        </TableCell>
                                        <TableCell className={tdClr} align="right">8AM - 9PM</TableCell>

                                        <TableCell className={tdClr} align="right">
                                            <Link style={{ textDecoration: 'none' }} to="/appoinment">
                                                <Button variant="contained" className={bookBtn}>Book <i style={{ paddingLeft: '8px'}} className="far fa-clock"></i></Button>
                                            </Link>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell className={tdClr} component="th" scope="row">
                                            Wednesday
                                        </TableCell>
                                        <TableCell  className={tdClr} align="right">8AM - 9PM</TableCell>
                                        <TableCell className={tdClr} align="right">
                                            <Link style={{ textDecoration: 'none' }} to="/appoinment">
                                                <Button variant="contained" className={bookBtn}>Book <i style={{ paddingLeft: '8px'}} className="far fa-clock"></i></Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell  className={tdClr} component="th" scope="row">
                                            Thursday
                                        </TableCell>
                                        <TableCell className={tdClr} align="right">8AM - 9PM</TableCell>
                                        <TableCell className={tdClr} align="right">
                                            <Link style={{ textDecoration: 'none' }} to="/appoinment">
                                                <Button variant="contained" className={bookBtn}>Book <i style={{ paddingLeft: '8px'}} className="far fa-clock"></i></Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>

                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell className={tdClr} component="th" scope="row">
                                            Friday
                                        </TableCell>
                                        <TableCell className={tdClr} align="right">8AM - 9PM</TableCell>
                                        <TableCell className={tdClr} align="right">
                                            <Link style={{ textDecoration: 'none' }} to="/appoinment">
                                                <Button variant="contained" className={bookBtn}>Book <i style={{ paddingLeft: '8px'}} className="far fa-clock"></i></Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>

                                    {/* <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">
                                            Saturday-Sunday
                                        </TableCell>
                                        <TableCell align="right">Closed</TableCell>
                                    </TableRow> */}
                                </TableBody>
                            </Table>
                        </TableContainer>
            
                    </Grid>

                    {/* <Grid className="App" item xs={12} md={6}>
                        <img width={'80%'} src='https://i.postimg.cc/mg20McVt/physician-fotolia-doctor-of-medicine-doctors-and-nurses-2ea3c554d5036df69ac2cbf6e1b3bc3a.png' alt="" />
                    </Grid> */}
                </Grid>





            
            









        </Container>
















        </Box>
    );
};

export default Contact;