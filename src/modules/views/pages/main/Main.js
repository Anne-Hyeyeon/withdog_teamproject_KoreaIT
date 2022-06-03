import React from 'react';
import BannerNotLoggedIn from './BannerNotLoggedIn';
import ProductValues from './ProductValues';
import NewsColumn from './NewsColumn';
import BestHotel from './BestHotel';
import SponsoredBanner from './SponsoredBanner';
import Banner from './Banner'

function Main({ userObj } ) {
    return (       
        <React.Fragment>
            { userObj ? <Banner /> : <BannerNotLoggedIn />
            }
            <ProductValues />
            <NewsColumn />
            <BestHotel />
            <SponsoredBanner />
        </React.Fragment>
    );
}

export default Main;