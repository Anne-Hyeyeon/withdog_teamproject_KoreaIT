import React from 'react';
import ProductValues from './ProductValues';
import ProductCategories from './ProductCategories';
import ProductCTA from './ProductCTA';
import Banner from './Banner';
import SponsoredBanner from './SponsoredBanner';



function Main(props) {

    return (
        <React.Fragment>
            <Banner />
            <ProductValues />
            <ProductCategories />
            <ProductCTA />
            <SponsoredBanner />
        </React.Fragment>
    );
}

export default Main;