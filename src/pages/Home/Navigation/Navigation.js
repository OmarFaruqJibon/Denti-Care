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
        },
        bannerTitle:{
            position: 'absolute',
            top: '38%',
            left: '8%',
            lineHeight: '30px',

        }
    });
    const {navItem, navIcon, navItems,navLogo,mobileNav,sideMinuList,mobileNavList, bannerTitle} = useStyle();


    

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

            <Box className={bannerTitle}>
                
                <Typography variant="caption" component="div">
                    Best Care and Better Doctor
                </Typography>
                <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                Time to Smile!  <br />
                </Typography>
                <Typography variant="body2" component="div" sx={{ marginBottom: '20px' }}>
                    Enjoy our new dental offers and travel destinations,they’re online immediately. <br />  Choose your service or destination and start smiling again!
                </Typography>

                
                <Link className={navItem} style={{ textDecoration: 'none' }} to="/appoinment">
                    <Button color="success" variant="contained">Book Appoinment</Button>
                </Link>
                



            </Box>





        </div>
    );

};

export default Navigation;