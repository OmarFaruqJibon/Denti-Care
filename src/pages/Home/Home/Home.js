import React from 'react';
import AppoinmentUI from '../AppoinmentUI/AppoinmentUI';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <Banner></Banner> */}
            <Services></Services>
            <AppoinmentUI></AppoinmentUI>
        </div>
    );
};

export default Home;