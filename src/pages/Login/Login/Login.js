import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link , useLocation , useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const {user, authError, userLogin, googleLogin, isLoading} = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleLogInField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleForm = e => {
       
        userLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        googleLogin(location, history);
    }

    return (
        <Container className="App">
            {isLoading && <CircularProgress/>}
            <Grid container spacing={2}>
                {!isLoading && <Grid sx={{mt:8}} item xs={12} md={6}>
                    <Typography sx={{fontWeight: "bold"}} variant="h4">Welcome</Typography>
                    <form onSubmit={handleForm}>

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

                        <Button type="submit" sx={{mt:3}} style={{width:"70%"}} variant="contained">Login</Button>
                    </form>
{/* 
                    <Link to="/register" style={{textDecoration: "none"}}>
                        
                        <Typography sx={{ mt:1}} variant="body1">
                            Don't have an account? <span>Register</span>   
                        
                        </Typography>
                    </Link> */}

                    

                        <Typography sx={{ mt:2}} variant="body1">
                            Don't have an account?  
                            <Link to="/register" style={{color: "rgb(25 118 210)" ,textDecoration: "none", marginLeft: "10px"}}>
                                Register   
                            </Link>
                        </Typography>
                    
                    


                    <Typography sx={{ mt:3}} variant="body1"> <span style={{color: "rgb(163 163 163)"}}>--------------------------------------- </span> OR <span style={{color: "rgb(163 163 163)"}}>--------------------------------------- </span></Typography>
                   
                   
                    <Button onClick={handleGoogleLogin} sx={{mt:4}} style={{width:"70%", textTransform: "none"}} variant="outlined">

                        <img 
                        className="googleIcon"
                        width="25px"
                        src={'https://i.postimg.cc/gcMqbTF7/google.png'} alt="" 
                        style={{marginRight: " 10px"}}/> 

                        Login with Google
                        
                    </Button>


                    {
                        user.email && <Alert severity="success">Login Succesfully!</Alert>
                    }

                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                </Grid>}

                    

                <Grid item xs={12} md={6}>
                    <img 
                    width="100%"
                    src={'https://i.postimg.cc/8CkqcYc6/Login-bro.png'} alt=""/>
                </Grid>
            </Grid>

        

        </Container>
    );
};

export default Login;