import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import loginImg from '../../../images/login.png';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {user, authError, regiserUser} = useAuth();
    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const handleLogInField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    // console.log(loginData)
    const handleForm = e => {
        if(loginData.password !== loginData.password2){
            alert("Password did not match!");
            return
        }
        regiserUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid className="App" sx={{mt:8}} item xs={12} md={6}>
                    <Typography sx={{fontWeight: "bold"}} variant="h4">Welcome</Typography>
                    <form onSubmit={handleForm}>

                        <TextField 
                        sx={{mt:3}}
                        style={{width:"70%"}}
                        id="standard-basic"
                        name="name"
                        onBlur={handleLogInField} 
                        label="Name" 
                        variant="standard" />
                        <br/>
                        <TextField 
                        sx={{mt:3}}
                        style={{width:"70%"}}
                        id="standard-basic"
                        name="email"
                        type="email"
                        onBlur={handleLogInField} 
                        label="Email" 
                        variant="standard" />
                        <br/>

                        <TextField 
                        sx={{mt:3}}
                        style={{width:"70%"}}
                        id="standard-basic" 
                        name="password"
                        onBlur={handleLogInField} 
                        label="Password" 
                        type="password"
                        variant="standard" />
                        <br/>

                        <TextField 
                        sx={{mt:3}}
                        style={{width:"70%"}}
                        id="standard-basic" 
                        name="password2"
                        onBlur={handleLogInField} 
                        label="Re-type Password" 
                        type="password"
                        variant="standard" />

                        <Button type="submit" sx={{mt:3}} style={{width:"70%"}} variant="contained">Register</Button>
                    </form>


                    {/* <Link to="/login" style={{textDecoration: "none"}}>
                        <Typography sx={{ mt:1}} variant="body1">Already user? Please Login</Typography>
                    </Link> */}


                    <Typography sx={{ mt:2}} variant="body1">
                        Already have an account?  
                            <Link to="/login" style={{color: "rgb(25 118 210)" ,textDecoration: "none", marginLeft: "10px"}}>
                                 Log in    
                            </Link>
                        </Typography>



                    <br />
                    
                    {
                        user.email && <Alert severity="success">Register Succesfully!</Alert>
                    }

                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }


                </Grid>
                <Grid item xs={12} md={6}>
                    <img 
                    width="100%"
                    src={'https://i.postimg.cc/T1bsBM7Z/Mobile-login-rafiki.png'} alt=""/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;