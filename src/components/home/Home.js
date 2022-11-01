import React from 'react';
import Catagory from './homeComponents/Catagory';
import Difference from './homeComponents/Difference';
import HomeHeader from './homeHeader/HomeHeader';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <Difference />
            <Catagory/>
        </div>
    );
};

export default Home;