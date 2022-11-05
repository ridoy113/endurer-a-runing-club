import React from 'react';
import Catagory from './homeComponents/Catagory';
import Counter from './homeComponents/Counter';
import Difference from './homeComponents/Difference';
import HomeHeader from './homeHeader/HomeHeader';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <Difference />
            <Catagory />
            <Counter />
        </div>
    );
};

export default Home;