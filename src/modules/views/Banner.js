import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import mainloggedin1 from '../views/hy/assets/mainloggedin1.png'
import mainloggedin2 from '../views/hy/assets/mainloggedin2.png'
import mainloggedin3 from '../views/hy/assets/mainloggedin3.png'
import mainloggedin4 from '../views/hy/assets/mainloggedin4.png'
import mainloggedin5 from '../views/hy/assets/mainloggedin5.png'
import mainloggedin6 from '../views/hy/assets/mainloggedin6.png'
import mainloggedin7 from '../views/hy/assets/mainloggedin7.png'

const bgImg = [mainloggedin1, mainloggedin2, mainloggedin3, mainloggedin4,mainloggedin5, mainloggedin6,mainloggedin7]
const randomImg = Math.floor(Math.random() * 7)

export default function ProductHero() {
  return (
    <>
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${bgImg[randomImg]})`,
        backgroundColor: 'primary', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <Typography color="inherit" align="center" variant="h3" marked="center">
        돌아오신 걸 환영합니다 주인님!
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h6"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 }, fontFamily:'HallymMjo', fontWeight:300 }}
      >
        애견인들과 함께 하는 다양한 활동이 기다리고 있어요!
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
      
    </ProductHeroLayout>
    </>
  );
}
