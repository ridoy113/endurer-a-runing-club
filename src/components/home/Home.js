import React from 'react';
import Catagory from './homeComponents/Catagory';
import Check from './homeComponents/Check';
import Counter from './homeComponents/Counter';
import Difference from './homeComponents/Difference';
import MedalLogo from './homeComponents/MedalLogo';
import News from './homeComponents/News';
import Submit from './homeComponents/Submit';
import Testimonials from './homeComponents/Testimonials';
import HomeHeader from './homeHeader/HomeHeader';
import Footer from '../shaered/footer/Footer';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <Difference />
            <Catagory />
            <Counter />
            <Testimonials />
            <Check />
            <News />
            <MedalLogo />
            <Submit />
            <Footer />
        </div>
    );
};

export default Home;