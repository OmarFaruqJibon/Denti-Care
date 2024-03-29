import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Appoinment from "./pages/Appoinment/Appoinment/Appoinment";
import Login from "./pages/Login/Login/Login";
// import Navigation from "./pages/Home/Navigation/Navigation";
import Register from "./pages/Login/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import AuthProvider from "./pages/context/AuthProvider/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import SecondNav from "./pages/Home/Navigation/SecondNav";
import Footer from "./pages/Shared/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
function App() {
  return(
        <div>
         <AuthProvider>
         <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/login">
                    <SecondNav></SecondNav>
                    <Login></Login>
                </Route>
                <Route path="/register">
                    <SecondNav></SecondNav>
                    <Register></Register>
                </Route>

                <Route path="/about">
                    <SecondNav></SecondNav>
                    <About></About>
                    <Footer></Footer>
                </Route>
                <Route path="/contact">
                    <SecondNav></SecondNav>
                    <Contact></Contact>
                    <Footer></Footer>
                </Route>


                <PrivateRoute path="/appoinment">
                    <Appoinment></Appoinment>
                </PrivateRoute>
                <PrivateRoute path="/dashboard">
                    {/* <Navigation></Navigation> */}
                    <Dashboard></Dashboard>
                </PrivateRoute>









            </Switch>
        </Router>
         </AuthProvider>
        </div>

  );
  
}

export default App;
