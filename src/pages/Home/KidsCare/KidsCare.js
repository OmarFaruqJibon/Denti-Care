import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './KidsCare.css';

const KidsCare = () => {
    return (
        <Box sx={{ flexGrow: 1 , p: 4}}>
            <Grid my={8}  container spacing={2}>
                <Grid  className="kidsCareWrapper" item xs={12} md={6}>
                   <Box>
                   <Box>
                        <Typography style={{color: '#115278'}} mt={2} variant="h4">
                            Kids Oral Care
                        </Typography>
                        <Typography sx={{mt:3}}  variant="body2">
                            Dental Hygiene for Kids · Use a pea-sized amount of fluoride toothpaste and make <br /> sure your child spits
                        </Typography>
                    </Box>
                    
                    <Box>
                       <Grid my={5}  container spacing={2}>
                            <Grid  item xs={12} md={4}>
                                <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center' }}>
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                            image={'https://i.postimg.cc/N0DjqgwW/dental-checkup-1.png'}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" color="#1ebeb6" component="div">
                                            Prosthesis
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            It is a rare possibility for the actual dental care implant
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                           </Grid>
                           
                            <Grid  item xs={12} md={4}>
                                <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center'  }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                            image={'https://i.postimg.cc/k5pkL451/dental-checkup-5.png'}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" color= "#115278" component="div">
                                            Alignment
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            Dental implants have a high success rate of around 
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                           </Grid>

                            <Grid  item xs={12} md={4}>
                                <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center'  }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                            image={'https://i.postimg.cc/gJwKjyWp/dental-checkup-6.png'}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" color="#1ebeb6" component="div">
                                            Implants
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            Tooth implants have been used successfully for decades
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                           </Grid>

                       </Grid>


                    </Box>
                   </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img  style={{width: '100%', }} src={'https://i.postimg.cc/pdWcV9TL/kid.png'} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default KidsCare;