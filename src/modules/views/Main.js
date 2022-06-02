import React from 'react';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductCategories from './ProductCategories';
import ProductCTA from './ProductCTA';
import SponsoredBanner from './SponsoredBanner';
import Banner from './Banner'

function Main({ userObj } ) {
    return (
        <React.Fragment>
            { userObj ? <Banner /> : <ProductHero />
            }
            <ProductValues />
            <ProductCategories />
            <ProductCTA />
            <SponsoredBanner />
        </React.Fragment>
    );
}

export default Main;