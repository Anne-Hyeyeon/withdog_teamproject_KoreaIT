import React from 'react';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductCategories from './ProductCategories';
import ProductCTA from './ProductCTA';
import ProductSmokingHero from './ProductSmokingHero';
import SponsoredBanner from './SponsoredBanner';

function Main({ userObj } ) {
    return (
        <React.Fragment>
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductCTA />
            {/* <ProductSmokingHero /> */}
            <SponsoredBanner />
        </React.Fragment>
    );
}

export default Main;