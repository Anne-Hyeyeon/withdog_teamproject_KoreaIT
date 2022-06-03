import React from 'react';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductCategories from './ProductCategories';
import ProductCTA from './ProductCTA';
import SponsoredBanner from './SponsoredBanner';
import Banner from './Banner'
import Helmet from 'react-helmet'

function Main({ userObj } ) {
    return (       
        <React.Fragment>
            <Helmet>
                <title>윗독(withdog)</title>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://withdog0603.netlify.app/" />
                <meta property="og:title" content="윗독(WithDog)" />
                <meta property="og:description" content="견주들의 놀이터" />
                <meta property="og:image" content="src/modules/views/hy/assets/withdogmeta.png" />
            </Helmet>
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