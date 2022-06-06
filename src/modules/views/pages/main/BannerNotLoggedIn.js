import * as React from 'react';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import BannerLayout from './BannerLayout';

const backgroundImage =
  'https://cdn.pixabay.com/photo/2015/07/09/19/32/dog-838281_960_720.jpg';

export default function BannerNotLoggedIn() {
  return (
    <>
    <BannerLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <Typography color="inherit" align="center" variant="h4" marked="center" sx={{fontSize: { xs:25, md:40 }}}>
        어서오세요 주인님!
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h6"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 }, fontFamily:'HallymMjo', fontWeight:300 }}
      >
        견주들의 놀이터, 윗독(WithDog)의 회원이 되어주세요!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        sx={{ minWidth: 200 }}
      >
        시작하기
      </Button>
      
    </BannerLayout>
    </>
  );
}
