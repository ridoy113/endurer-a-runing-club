import React from 'react';
import Catagory from './homeComponents/Catagory';
import Counter from './homeComponents/Counter';
import Difference from './homeComponents/Difference';
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
        </div>
    );
};

export default Home;