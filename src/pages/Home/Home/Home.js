import React from 'react';
import AppoinmentUI from '../AppoinmentUI/AppoinmentUI';
import KidsCare from '../KidsCare/KidsCare';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import Quote from '../Quote/Quote';
import Contact from '../../Contact/Contact';
import Team from '../Team/Team';
import Footer from '../../Shared/Footer/Footer';
import Review from '../Review/Review';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <Banner></Banner> */}
            <Services></Services>
            <KidsCare></KidsCare>
            <Quote></Quote>
            <Team></Team>
            <AppoinmentUI></AppoinmentUI>
            <Review/>
            <Contact></Contact>

            <Blog/>

            <Footer></Footer>

            {/*pest clr:  #1fa386  #129A7C*/}

        </div>
    );
};

export default Home;