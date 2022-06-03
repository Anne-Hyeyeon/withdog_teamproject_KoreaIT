import React from 'react';
import { Grid } from '@mui/material';
import dogbanner1 from '../../../assets/dogbanner1.png';
import dogbanner2 from '../../../assets/dogbanner2.png';
import { CardMedia, CardActionArea, Container } from '@mui/material';
import Typography from '../../../components/Typography';
import withdog2 from '../../../assets/withdog2.png'

function SponsoredBanner(props) {
    return (
        <Container component="section" sx={{ mt: 8 }}>
        <Typography variant="h4" marked="center" align="center" component="h2" sx={{mb:5}}>
        애견용품 할인/봉사활동 정보
      </Typography>
        <Grid container spacing={2} sx={{ mb:8 }}>
            <Grid item xs={12} md={12} xl={12} sx={{ mt:2 }}>
                <CardActionArea component="a" href="https://search.shopping.naver.com/search/all?query=%EA%B0%95%EC%95%84%EC%A7%80+%EC%9A%A9%ED%92%88&bt=-1&frm=NVSCPRO" target='_blank'>
                    <CardMedia
                    component="img"
                    image={dogbanner1}
                    alt='article'
                    />
                </CardActionArea>
                </Grid>
               
            <Grid item xs={12} md={12} xl={12}>
                <CardActionArea component="a" href="https://www.zooseyo.or.kr/Yu_board/volunteer_listV.php" target='_blank'>
                    <CardMedia
                    component="img"
                    image={withdog2}
                    alt='article'
                    />
                </CardActionArea>
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
                <CardActionArea component="a" href="https://search.shopping.naver.com/search/all?query=%EA%B0%95%EC%95%84%EC%A7%80%20%ED%94%84%EB%A1%9C%ED%95%84&cat_id=&frm=NVSHATC" target='_blank'>
                    <CardMedia
                    component="img"
                    image={dogbanner2}
                    alt='article'
                    />
                </CardActionArea>
            </Grid>
        </Grid>
    </Container>
    );
}

export default SponsoredBanner;