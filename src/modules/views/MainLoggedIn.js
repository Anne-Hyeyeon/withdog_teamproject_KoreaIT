import React from 'react';
import ProductValues from './ProductValues';
import ProductCategories from './ProductCategories';
import ProductHowItWorks from './ProductHowItWorks';
import ProductCTA from './ProductCTA';
import ProductSmokingHero from './ProductSmokingHero';
import Banner from './Banner';

function Main(props) {
    return (
        <React.Fragment>
            <Banner />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
        </React.Fragment>
    );
}

export default Main;