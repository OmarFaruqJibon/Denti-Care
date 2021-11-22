import React from 'react';
import AppoinmentUI from '../AppoinmentUI/AppoinmentUI';
import KidsCare from '../KidsCare/KidsCare';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import Quote from '../Quote/Quote';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <Banner></Banner> */}
            <Services></Services>
            <KidsCare></KidsCare>
            <Quote></Quote>
            <AppoinmentUI></AppoinmentUI>
            <Contact></Contact>
        </div>
    );
};

export default Home;