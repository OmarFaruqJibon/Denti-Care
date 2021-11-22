import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Contact = () => {
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
        </Box>
    );
};

export default Contact;