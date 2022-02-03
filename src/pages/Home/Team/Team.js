import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { makeStyles } from '@mui/styles';

const Team = () => {
    const useStyle = makeStyles({
        socialIcon:{
            fontSize: '12px',
            display: 'flex !important',
            justifyContent: 'center !important',
        },
        titleColor:{
            color: '#115278'
        },
        teamCard:{
            '&:hover': {
                    transform: 'scale(1.1, 1.1)',
                    transition: 'all 0.5s ease-in-out',
             },
        }
    });

    const {socialIcon, titleColor,teamCard} = useStyle();


    return (
        <Box className="App" sx={{ flexGrow: 1, marginTop: '90px' }}>

                <Container>
                    <Typography sx={{ fontWeight: 400, mb: 1}} variant="h6" component="div">
                        DentiCare
                    </Typography>
                    <Typography  className={titleColor} sx={{ fontWeight: 600, mb: 3}} variant="h4" component="div">
                        Specialized Team
                    </Typography>

                    <Typography sx={{ mb: 8 }} variant="p" component="div" color="text.secondary">
                        "We are a team of dentists, hygienists and  receptionists who work together to ensure that you <br /> receive the best treatment that you require at a very <br /> time that suits you."
                    </Typography>



                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={teamCard} sx={{ maxWidth: 345, margin: '0 auto' }}>
                                <CardMedia
                                    component="img"
                                    alt="doctor"
                                    height="100%"
                                    image={"https://i.postimg.cc/dtVKkz8g/front-view-covid-recovery-center-female-doctor-with-stethoscope-23-2148847896.jpg"}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className={titleColor}>
                                    Ana Roy
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with quality.
                                    </Typography>
                                </CardContent>
                                <CardActions className={socialIcon}>
                                        <Button sx={{ fontSize: "17px", color: '#115278'}}><i className="fab fa-facebook-f"></i></Button>
                                        <Button sx={{ fontSize: "17px", color: '#115278' }}><i className="fab fa-twitter"></i></Button>
                                        <Button sx={{ fontSize: "17px", color: '#115278' }}><i className="fab fa-linkedin-in"></i></Button>
                                        <Button sx={{ fontSize: "17px" , color: '#115278'}}><i className="fab fa-youtube"></i></Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={teamCard} sx={{ maxWidth: 345, margin: '0 auto' }}>
                                <CardMedia
                                    component="img"
                                    alt="doctor"
                                    height="100%"
                                    image={"https://i.postimg.cc/BQT1bPBm/beautiful-female-doctor-white-coat-with-folder-standing-near-window-144627-65896.jpg"}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className={titleColor}>
                                    Liza Smith
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service leadership rather than prospective experiences.
                                    </Typography>
                                </CardContent>
                                <CardActions className={socialIcon}>
                                        <Button sx={{ fontSize: "17px", color: '#115278'}}><i className="fab fa-facebook-f"></i></Button>
                                        <Button sx={{ fontSize: "17px", color: '#115278' }}><i className="fab fa-twitter"></i></Button>
                                        <Button sx={{ fontSize: "17px", color: '#115278' }}><i className="fab fa-linkedin-in"></i></Button>
                                        <Button sx={{ fontSize: "17px" , color: '#115278'}}><i className="fab fa-youtube"></i></Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={teamCard} sx={{ maxWidth: 345, margin: '0 auto' }}>
                                <CardMedia
                                    component="img"
                                    alt="doctor"
                                    height="100%"
                                    image={"https://i.postimg.cc/260Zzsdr/medium-shot-doctor-with-stethoscope.jpg"}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className={titleColor}>
                                    Ida Gray
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Objectively integrate enterprise-wide strategic theme areas with good infrastructures. Interactively productize premium technologies.
                                    </Typography>
                                </CardContent>
                                <CardActions className={socialIcon}>
                                        <Button sx={{ fontSize: "17px", color: '#115278'}}><i className="fab fa-facebook-f"></i></Button>
                                        <Button sx={{ fontSize: "17px", color: '#115278' }}><i className="fab fa-twitter"></i></Button>
                                        <Button sx={{ fontSize: "17px", color: '#115278' }}><i className="fab fa-linkedin-in"></i></Button>
                                        <Button sx={{ fontSize: "17px" , color: '#115278'}}><i className="fab fa-youtube"></i></Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={teamCard} sx={{ maxWidth: 345,margin: '0 auto' }}>
                                <CardMedia
                                    component="img"
                                    alt="doctor"
                                    height="100%"
                                    image={"https://i.postimg.cc/0QDBFC7Y/portrait-doctor.jpg"}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className={titleColor}>
                                    Jeanne Sink
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Uniquely deploy cross-unit benefits with wireless testing procedures. Build backward compatible whereas tactical paradigms.
                                    </Typography>
                                </CardContent>
                                <CardActions className={socialIcon}>
                                        <Button sx={{ fontSize: "17px", color: '#115278'}}><i className="fab fa-facebook-f"></i></Button>
                                        <Button sx={{ fontSize: "17px", color: '#115278' }}><i className="fab fa-twitter"></i></Button>
                                        <Button sx={{ fontSize: "17px", color: '#115278' }}><i className="fab fa-linkedin-in"></i></Button>
                                        <Button sx={{ fontSize: "17px" , color: '#115278'}}><i className="fab fa-youtube"></i></Button>
                                </CardActions>
                            </Card>
                        </Grid>




                    </Grid>



                </Container>
            </Box>
    );
};

export default Team;