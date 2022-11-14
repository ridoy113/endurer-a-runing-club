import React from 'react';
import Footer from '../shaered/footer/Footer';
import PortfolioBanner from './portfolioSection/PortfolioBanner';
import PortfolioInfo from './portfolioSection/PortfolioInfo';

const Portfolio = () => {
    return (
        <div>
            <PortfolioBanner/>
            <PortfolioInfo/>



            <Footer />
        </div>
    );
};

export default Portfolio;