import { Typography, Grid, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React from 'react';

const Quote = () => {
    const useStyle = makeStyles({
        quoteBg:{
            backgroundColor: '#1ebeb6'
        },
        quoteBody:{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column !important',
            padding: '50px'
        },
        quoteInputField:{
            marginTop: '30px',
            marginBottom: '30px',
        },
        quoteMail:{
            backgroundColor: 'white !important',
            // borderTopLeftRadius: '30px',
            // borderBottomLeftRadius: '30px',
            boxShadow: 'none !important',
            border: 'none !important',
            width: '60%'
        },
        quoteBtn:{
            backgroundColor:'#115278','&:hover': {
                background: "#073c5b"
             },
            borderTopRightRadius: '30px',
            borderBottomRightRadius: '30px',
            border: 'none',
            padding: '12px 25px',
            color: 'white',
            cursor: 'pointer'
        },
    });

    const {quoteBg,quoteBody,quoteMail,quoteBtn,quoteInputField} = useStyle();

    return (
        <Box className={quoteBg} sx={{ flexGrow: 1 , p: 4}}>
            
            <Grid container spacing={2}>
                <Grid style={{textAlign: 'center'}} item xs={12} md={6}>
                    <img  style={{width: '80%', }} src={'https://i.postimg.cc/K8rsy7mW/tooth-brush.png'} alt=""/>
                </Grid>

                <Grid className={quoteBody} item xs={12} md={6}>
                    <Box>
                        <Typography sx={{fontWeight:'bold', color:"#115278"}} variant="h4" component="div">
                            Get A Quote
                        </Typography>
                        <Typography sx={{mt:4, color:'white'}} variant="body1" color="text.secondary">
                            Efficiently enable enabled sources and cost effective products. Completely
                            synthesize principle-centered information.
                        </Typography>
                    </Box>

                    <Box  className={quoteInputField}>
                        <TextField 
                            className={quoteMail} 
                            hiddenLabel
                            id="filled-hidden-label-small"
                            placeholder="Your email"
                            variant="filled"
                            size="small" 
                        />
                        <button className={quoteBtn} >Subscribe</button>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Quote;