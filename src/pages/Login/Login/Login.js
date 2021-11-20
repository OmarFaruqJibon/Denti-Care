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
                    <Typography sx={{fontWeight: "bold"}} variant="h5">Login</Typography>
                    <form onSubmit={handleForm}>

                        <TextField 
                        sx={{mt:3}}
                        style={{width:"100%"}}
                        id="standard-basic"
                        name="email"
                        type="email"
                        onBlur={handleLogInField} 
                        label="Email" 
                        variant="standard" />
                        <br/>

                        <TextField 
                        sx={{mt:3}}
                        style={{width:"100%"}}
                        id="standard-basic" 
                        name="password"
                        onBlur={handleLogInField} 
                        label="Password" 
                        type="password"
                        variant="standard" />

                        <Button type="submit" sx={{mt:3}} style={{width:"100%"}} variant="contained">Login</Button>
                    </form>
                    <Link to="/register" style={{textDecoration: "none"}}>
                        <Typography sx={{ mt:1}} variant="body1">New user? Please Register</Typography>
                    </Link>
                    <Typography sx={{ mt:1}} variant="body1">-------------OR-------------</Typography>
                    <Button onClick={handleGoogleLogin} sx={{mt:3}} style={{width:"100%"}} variant="contained">
                        {/* <img 
                        className="googleIcon"
                        width="25px"
                        src={'https://i.postimg.cc/gcMqbTF7/google.png'} alt="" />  */}
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