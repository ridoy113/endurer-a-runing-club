import React from 'react';
import Catagory from './homeComponents/Catagory';
import Check from './homeComponents/Check';
import Counter from './homeComponents/Counter';
import Difference from './homeComponents/Difference';
import News from './homeComponents/News';
import Testimonials from './homeComponents/Testimonials';
import HomeHeader from './homeHeader/HomeHeader';

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
        </div>
    );
};

export default Home;