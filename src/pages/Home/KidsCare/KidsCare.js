import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './KidsCare.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const KidsCare = () => {
    
    return (
        <Box sx={{ flexGrow: 1 , p: 5}}>
            <Grid my={8}  container spacing={2}>
                <Grid data-aos="fade-up"  data-aos-delay="200"  data-aos-duration="1000" className="kidsCareWrapper" item xs={12} md={6}>
                   <Box>
                   <Box>
                        <Typography style={{color: '#115278', fontWeight: 'bold'}} mt={2} variant="h4">
                            Kids Oral Care
                        </Typography>
                        <Typography sx={{mt:3}}  variant="body1">
                            Brush your teeth twice a day and floss at least once a day. Brushing also stimulates the gums, which helps to keep them  healthy and prevent gum disease.
                        </Typography>
                    </Box>
                    
                    <Box>
                       <Grid my={5}  container spacing={2}>
                            <Grid  item xs={12} md={4}>
                                <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center', margin: '0 auto' }}>
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                            image={'https://i.postimg.cc/7ZYqwsXw/dental-care.png'}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" color="black" component="div">
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
                                <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center', margin: '0 auto'  }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                            image={'https://i.postimg.cc/Hnmk5QD2/broken-tooth.png'}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" color="black" component="div">
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
                                <Card sx={{ maxWidth: 345, boxShadow: 0, textAlign: 'center', margin: '0 auto'  }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            style={{width: 'auto', height: '80px', margin: '0 auto'}}
                                            image={'https://i.postimg.cc/HxXLV6Kn/dental-care-1.png'}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" color="black" component="div">
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
                <Grid data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="200" style={{textAlign: 'center'}} item xs={12} md={6}>
                    <img  style={{width: '80%'}} src={'https://i.postimg.cc/pdWcV9TL/kid.png'} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default KidsCare;