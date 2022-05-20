import React from 'react';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductCategories from './ProductCategories';
import ProductHowItWorks from './ProductHowItWorks';
import ProductCTA from './ProductCTA';
import ProductSmokingHero from './ProductSmokingHero';

function Main(props) {
    return (
        <React.Fragment>
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
        </React.Fragment>
    );
}

export default Main;