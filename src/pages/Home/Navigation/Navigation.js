import React from 'react';
import './Navigation.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
  
const Navigation = () => {
    const theme = useTheme();
    const {user, logOut} = useAuth();

    const useStyle = makeStyles({
        navIcon:{
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
              }
        },
        navItems:{
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
              },
        },
        navLogo:{
            [theme.breakpoints.down('sm')]: {
                textAlign:'right'
              }
        },
        mobileNav:{
            textDecoration: 'none',
            fontWeight: 'bold',
            color: '#1976d2'
        },
        mobileNavList:{
            borderBottom: '1px solid #80808066',
            width: '100%',
            textAlign: 'left',
            paddingTop: '20px',
        },
        sideMinuList:{
          display: 'flex',
          flexDirection: 'column',
        },
        navItem:{
            color: 'black'
        }
    });
    const {navItem, navIcon, navItems,navLogo,mobileNav,sideMinuList,mobileNavList} = useStyle();





//------------ nav drawer
    const [state, setState] = React.useState(false);
    const list = (
      <Box
        sx={{ width: 250 }}
        role="presentation"
      >
        <List style={{textAlign: 'left'}}>
            <ListItem className={sideMinuList}>
                <ListItemText className={mobileNavList}>
                    <Link className={mobileNav} to="/appoinment">Appoinment</Link>
                </ListItemText>
                <Divider />

                <ListItemText className={mobileNavList}>
                    <Link className={mobileNav} to="/dashboard">Dashboard</Link>
                </ListItemText>
                <Divider />

                <ListItemText className={mobileNavList}>
                    <Link className={mobileNav} to="/about">About</Link>
                </ListItemText>
                <Divider />

                <ListItemText className={mobileNavList}>
                    <Link className={mobileNav} to="/contact">Contact</Link>
                </ListItemText>
                <Divider />

                <br/>
                <ListItemText>
                    {
                        user.email ? 
                        <Button onClick={logOut} sx={{ml:1}} variant="contained" color="success">Logout</Button>
                        :<Link style={{ textDecoration: 'none' }} to="/login">
                        <Button  variant="contained" color="success" sx={{ml:1}}>Login</Button>
                        </Link>
                    }
                </ListItemText>
                <Divider />

            </ListItem>
        </List>
        
      </Box>
    );
//------------ nav drawer end

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L120,250.7C240,213,480,139,720,144C960,149,1200,235,1320,277.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L120,170.7C240,149,480,107,720,122.7C960,139,1200,213,1320,250.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,186.7C480,171,600,117,720,117.3C840,117,960,171,1080,192C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

*/}

    return (
        <div className="nav-container nav-inner">
             <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{backgroundColor: 'rgb(0 0 255 / 0%)', boxShadow:'none'}} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={()=>setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography className={navLogo} variant="h5" component="div" sx={{ flexGrow: 1, fontWeight:600 }}>
                            
                            <Link style={{ textDecoration: 'none'}} to="/home">
                                <img style={{height:'100px'}} src={'https://i.postimg.cc/Njwmk18d/denticare-logo-inv-1.png'} alt="" />
                            </Link>
                        </Typography>

                        <div className={navItems}>
                            <Link className={navItem} style={{ textDecoration: 'none' }} to="/appoinment">
                                <Button sx={{color:'white'}}>Book Appoinment</Button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to="/dashboard">
                                    <Button sx={{ml:1,color:'white'}}>Dashboard</Button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to="/about">
                                    <Button sx={{ml:1,color:'white'}}>About</Button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to="/contact">
                                    <Button sx={{ml:1,color:'white'}}>Contact</Button>
                            </Link>

                            {
                                user.email ? 
                                    <Button onClick={logOut} sx={{ml:1}} variant="contained" color="success">Logout</Button>
                                :<Link style={{ textDecoration: 'none' }} to="/login">
                                <Button sx={{ml:1, color:'white'}}>Login</Button>
                                </Link>
                            }
                        </div>
                    </Toolbar>
                </AppBar>

                {/* mav drawer */}
                    <div>
                        <React.Fragment>
                        <Drawer
                            open={state}
                            onClose={()=>setState(false)}
                        >
                            {list}
                        </Drawer>
                        </React.Fragment>
                    </div>
                {/* mav drawer end*/}
            </Box>


        </div>
    );

};

export default Navigation;