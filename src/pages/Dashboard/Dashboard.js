import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import AddAdmin from './AddAdmin/AddAdmin';
import useAuth from '../hooks/useAuth';
import Payment from './Payment/Payment';
import SecondNav from '../Home/Navigation/SecondNav';
import './Dashboard.css';
import Profile from './Profile/Profile';
import TestReports from './TestRepoarts/TestReports';
import CreateReview from './CreateReview/CreateReview';
import ManageReviews from './ManageReviews/ManageReviews';



const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const {admin} = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const useStyle = makeStyles({
      sideMinuItem:{
          color: '#1976d2',
          textAlign: 'left',
          textDecoration: 'none',
          marginBottom: '10px',
          
      },
      sideMinuList:{
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
      }
  });
  const {sideMinuItem,sideMinuList} = useStyle();
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
    
      <List>
          <ListItem className={sideMinuList}>

              <ListItemIcon>
              <Link className={sideMinuItem}  to="/dashboard/profile"> <Button color="inherit">Profile</Button> </Link>
              </ListItemIcon>
              <Divider />


              {/* <ListItemIcon>
                <Link className={sideMinuItem}  to='/'> <Button color="inherit">Home</Button> </Link>
              </ListItemIcon>
              <Divider /> */}
              
              <ListItemIcon>
                <Link className={sideMinuItem}  to='/dashboard'> <Button color="inherit">Dashboard</Button> </Link>
              </ListItemIcon>
              <Divider />

              <ListItemIcon>
              <Link className={sideMinuItem}  to="/appoinment"> <Button color="inherit">Appoinment</Button> </Link>
              </ListItemIcon>
              <Divider />

              <ListItemIcon>
              <Link className={sideMinuItem}  to="/dashboard/reports"> <Button color="inherit">Test Reports</Button> </Link>
              </ListItemIcon>
              <Divider />

            
              <ListItemIcon>
              {! admin && 
                <Link className={sideMinuItem}  to={`${url}/reviews`}> <Button color="inherit">Give Review</Button> </Link>}
              </ListItemIcon>
              <Divider />

              <ListItemIcon>
              {admin && 
                <Link className={sideMinuItem}  to={`${url}/addAdmin`}> <Button color="inherit">Add Admin</Button> </Link>}
              </ListItemIcon>
              <Divider />

              <ListItemIcon>
              {admin && 
                <Link className={sideMinuItem}  to={`${url}/manageReview`}> <Button color="inherit">Manage Review</Button> </Link>}
              </ListItemIcon>
              <Divider />



          <ListItemText/>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <> 

    <div className="sideNavMenu">
        <SecondNav></SecondNav>
    </div>
      
    

    <Box className='dashboardHome' sx={{ display: 'flex'}}>
      <CssBaseline />

      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar> */}
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      <Toolbar />


        
        <Switch>  {/* Dashboard routes */}
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>

          <Route path={`${path}/addAdmin`}>
            <AddAdmin></AddAdmin>
          </Route>

          <Route path={`${path}/profile`}>
            <Profile></Profile>
          </Route>

          <Route path={`${path}/reports`}>
            <TestReports></TestReports>
          </Route>

          <Route path={`${path}/reviews`}>
            <CreateReview/>
          </Route>

          <Route path={`${path}/manageReview`}>
            <ManageReviews/>
          </Route>

          <Route path={`${path}/payment/:appoinmentId`}>
            <Payment></Payment>
          </Route>
        </Switch>

      </Box>
    </Box>
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
