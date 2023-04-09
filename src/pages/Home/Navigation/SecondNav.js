import React from 'react';
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
import dentLogo from '../../../images/dent2.png';


const SecondNav = () => {
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
            color: 'black',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'colum'
        },
        sideMinuList:{
          
          display: 'flex',
          flexDirection: 'column',
        },
        navItem:{
            color: 'black'
        }
    });
    const {navItem, navIcon, navItems,navLogo,mobileNav,sideMinuList} = useStyle();





//------------ nav drawer
    const [state, setState] = React.useState(false);
    const list = (
      <Box
        sx={{ width: 250 }}
        role="presentation"
      >
        <List>
            <ListItem className={sideMinuList}>
                <ListItemText className={mobileNav}>
                    <Link className={mobileNav} to="/">Home</Link>
                </ListItemText>
                <Divider />
                <br/>
                <ListItemText className={mobileNav}>
                    <Link className={mobileNav} to="/dashboard">Dashboard</Link>
                </ListItemText>
                <Divider />
                <br/>
                <ListItemText>
                    {
                        user.email ? 
                        <Link className={mobileNav} to="/">Log out</Link>
                        :<Link className={mobileNav} to="/login">Login</Link>
                        }
                </ListItemText>
                <Divider />
                <br/>
            </ListItem>
        </List>
        
      </Box>
    );
//------------ nav drawer end

// style={{backgroundColor: '#1ebeb6'}}

    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
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

                        <Typography className={navLogo} variant="h5" component="div" sx={{ flexGrow: 1, fontWeight:600, my:1 }}>
                            
                            <Link style={{ textDecoration: 'none'}} to="/home">
                                <img style={{height:'50px'}} src={dentLogo} alt="" />
                            </Link>
                        </Typography>

                        <div className={navItems}>
                            <Link className={navItem} style={{ textDecoration: 'none' }} to="/home">
                                <Button sx={{color:'white'}}>Home</Button>
                            </Link>
                            {/* <Link className={navItem} style={{ textDecoration: 'none' }} to="/appoinment">
                                <Button sx={{color:'white'}}>Appointment</Button>
                            </Link> */}
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

export default SecondNav;