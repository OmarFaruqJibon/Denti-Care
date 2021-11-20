import React from 'react';
import AppoinmentUI from '../AppoinmentUI/AppoinmentUI';
import Banner from '../Banner/Banner';
import KidsCare from '../KidsCare/KidsCare';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <Banner></Banner> */}
            <Services></Services>
            <KidsCare></KidsCare>
            <AppoinmentUI></AppoinmentUI>
        </div>
    );
};

export default Home;