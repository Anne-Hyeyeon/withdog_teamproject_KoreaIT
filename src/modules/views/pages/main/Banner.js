import * as React from 'react';
import Typography from '../../../components/Typography';
import BannerLayout from './BannerLayout';
import mainloggedin1 from '../../../assets/mainloggedin1.png'
import mainloggedin2 from '../../../assets/mainloggedin2.png'
import mainloggedin3 from '../../../assets/mainloggedin3.png'
import mainloggedin4 from '../../../assets/mainloggedin4.png'
import mainloggedin5 from '../../../assets/mainloggedin5.png'
import mainloggedin6 from '../../../assets/mainloggedin6.png'
import mainloggedin7 from '../../../assets/mainloggedin7.png'

const bgImg = [mainloggedin1, mainloggedin2, mainloggedin3, mainloggedin4,mainloggedin5, mainloggedin6,mainloggedin7]
const randomImg = Math.floor(Math.random() * 7)

export default function Banner() {
  return (
    <>
    <BannerLayout
      sxBackground={{
        backgroundImage: `url(${bgImg[randomImg]})`,
        backgroundColor: 'primary', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <Typography color="inherit" align="center" variant="h4" sx={{fontSize: { xs:25, md:40 }}} marked="center">
        돌아오신 걸 환영합니다 주인님!
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h6"
        sx={{ mb: 4, mt: { xs: 3, sm: 9 }, fontFamily:'HallymMjo', fontWeight:300 }}
      >
        윗독에서 할 수 있는 다양한 활동들이 기다리고 있어요!
      </Typography>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        sx={{ minWidth: 200 }}
      >
        시작하기
      </Button> */}
      
    </BannerLayout>
    </>
  );
}
