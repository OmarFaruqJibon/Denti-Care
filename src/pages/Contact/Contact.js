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
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


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
    });
    const {tableBg, tdClr, bookBtn} = useStyle();



    return (
        <Box>
            <Box className="App">
                <Typography style={{color: '#115278', fontWeight: 'bold'}} mt={2} variant="h4">
                    Contact DentiCare
                </Typography>
                <Typography sx={{mt:3}}  variant="body2">
                Globally incubate standards compliant channels before scalable benefits. Quickly <br />
                 disseminate superior deliverables whereas web-enabled applications.
                </Typography>
            </Box>

            <Box>
                <Container>
                <Grid my={5}  container spacing={2}>
                    <Grid  item xs={6} md={3}>
                        <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center' }}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                    image={'https://i.postimg.cc/W3mPjdgk/emergency-call.png'}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="#011c7e" component="div">
                                        Emergency Call
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        415-205-5550 <br />
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
                                    style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                    image={'https://i.postimg.cc/DwDhck78/address.png'}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color= "#011c7e" component="div">
                                    Address
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    500 Linden Ave, South San Francisco, <br />
                                     CA 94080, United States 
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
                                    style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                    image={'https://i.postimg.cc/yNZHQQNn/clinic.png'}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="#011c7e" component="div">
                                    Book By Phone
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    415-205-5550 <br />
                                     405-222-5551
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
                                    style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                    image={'https://i.postimg.cc/hjRqHLzn/email.png'}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="#011c7e" component="div">
                                    Email Address
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    office@denticare.com <br />
                                     emergencies@denticare.com
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>

            </Container>
            </Box>




        <Container sx={{ mb:8 }}>

                <Grid container spacing={2}>
                    <Grid  item xs={12} md={6}>
                        <TableContainer component={Paper}>
                            <Table className={tableBg} sx={{ Width: 650 }} aria-label="simple table">
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

                    <Grid  item xs={12} md={6}>
                        
                    </Grid>
                 </Grid>





            
            









        </Container>
















        </Box>
    );
};

export default Contact;