import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const About = () => {
    const useStyle = makeStyles({
        dentiClr:{
            color: '#bc74a5'
        },
    });
    const {dentiClr} = useStyle();

    return (
        <Container sx={{my:8}}>

            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>

                    <Box className="">

                        <Typography style={{color: '#115278' , fontWeight: 'bold'}} mt={2} variant="h4">
                            About Dent<strong className={dentiClr}>Care</strong>
                        </Typography>

                        <Typography sx={{mt:3}}  variant="body2">
                            DentCare, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition as well as the oral mucosa. <br /> <br />

                            The modern movement of evidence-based dentistry calls for the use of high-quality scientific research and evidence to guide decision-making such as in manual tooth conservation, dealing with oral diseases such as tooth decay and periodontitis, as well as systematic diseases such as osteoporosis, diabetes, celiac disease, cancer, HIV/AIDS which could also affect the oral cavity. <br /> <br />
                            Other practices relevant to evidence-based dentistry include radiology of the mouth to inspect teeth deformity or oral malaises, haematology (study of blood) to avoid bleeding complications during dental surgery, cardiology (due to various severe complications arising from dental surgery with patients with heart disease), etc.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img 
                    style={{width: 580}}
                    src={'https://i.postimg.cc/vHs53GMW/home-services-4.jpg'} alt=""/>
                </Grid>

            </Grid>









            <Grid className='App' container spacing={2} sx={{mt:8}}>
                <Grid item xs={12} md={6}>
                    <img 
                    style={{width: 450}}
                    src={'https://i.postimg.cc/zvmTmrhY/home-services-3.jpg'} alt=""/>
                </Grid>
                <Grid item xs={12} md={6}>
                <img 
                    style={{width: 450}}
                    src={'https://i.postimg.cc/SKvWr8Ns/home-services-2.jpg'} alt=""/>
                </Grid>

            </Grid>


        </Container>
    );
};

export default About;