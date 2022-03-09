import React from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const Footer = () => {

    const useStyle = makeStyles({
        footerBg:{
            backgroundColor: '#e7e7e7'
        },
        dentiClr:{
            color: '#115278'
        },
        footerBottom:{
            backgroundColor: '#0e54ae',
            padding: '20px'
        },
        socialFont:{
            marginTop: '20px'
        }
    });

    const {footerBg, dentiClr, footerBottom, socialFont} = useStyle();
    
    return (
        <>
            <Box className={footerBg} sx={{ flexGrow: 1 , p: 4}}>
                <Box>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={3}>
                            <Link style={{ textDecoration: 'none'}} to="/home">
                                <Typography sx={{color:'#bc74a5'}} variant="h4" color="text.secondary">
                                    <strong className={dentiClr}>Dent</strong>Care
                                </Typography>
                            </Link>

                            <Box>
                                <Typography sx={{mt:2, color:'black', lineHeight: '25px'}} variant="body2" color="text.secondary">
                                We are a friendly team of dentists <br /> working together to ensure that you <br /> receive the best treatment that you <br /> require.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={3}>
                                <Typography sx={{fontWeight:'bold', color:"#115278"}} variant="h6" component="div">
                                    About
                                </Typography>
                                <Typography sx={{mt:2, color:'black', lineHeight: '30px'}} variant="body2" color="text.secondary">
                                    Our Dental Team <br />
                                    Pricing & Pricelist <br />
                                    Solutions <br />
                                    Dental Services <br />
                                </Typography>

                        </Grid>

                        <Grid  item xs={12} md={3}>
                                <Typography sx={{fontWeight:'bold', color:"#115278"}} variant="h6" component="div">
                                    Our Awards
                                </Typography>
                                <Typography sx={{mt:2, color:'black', lineHeight: '30px'}} variant="body2" color="text.secondary">
                                    Best Patient Care 2017 <br />
                                    Best Practice & Team 2016 <br />
                                    Best Patient Care 2014 <br />
                                </Typography>

                        </Grid>

                        <Grid  item xs={12} md={3}>
                                <Typography sx={{fontWeight:'bold', color:"#115278"}} variant="h6" component="div">
                                    Social Network
                                </Typography>
                                <Typography sx={{mt:2, color:'black', lineHeight: '25px'}} variant="body2" color="text.secondary">
                                    Visit DentiCare on these social <br /> links and connect with us. Make sure <br /> to follow our accounts for regular updates.
                                </Typography>

                                <Box className={socialFont}> 
                                    <i style={{color: 'white', backgroundColor: '#0e54ae', borderRadius: '50%', padding: '9px 12px',marginRight: '10px'}} className="socialFont fab fa-facebook-f"></i>
                                    <i style={{color: 'white',  backgroundColor: '#0e54ae', borderRadius: '50%', padding: '9px',marginRight: '10px'}} className="socialFont fab fa-linkedin-in"></i>
                                    <i style={{color: 'white',  backgroundColor: '#0e54ae', borderRadius: '50%', padding: '9px',marginRight: '10px'}} className="socialFont fab fa-twitter"></i>
                                    <i style={{color: 'white',  backgroundColor: '#0e54ae', borderRadius: '50%', padding: '9px',marginRight: '10px'}} className="socialFont fab fa-youtube"></i>
                                </Box>


                        </Grid>

                    </Grid>
                </Box>
            </Box>


            <Box>
            <Typography className={footerBottom} sx={{color:"white", textAlign:'center'}} variant="body1" component="div">
                Copyright 2022 by DentCare. All rights reserved.
            </Typography>
            </Box>

        </>
    );
};
export default Footer;