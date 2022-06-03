import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../../components/Typography';
import Button from '../../../components/Button';
import pethotel from '../../../assets/pethotel.jpeg';
import { Favorite } from '@mui/icons-material';


function ProductCTA() {

  const now = new Date()
  const month = now.getMonth() + 1 

  return (
    <Box component="section" sx={{bgcolor:'secondary.light', p:1}}>
    <Typography variant="h4" marked="center" align="center" component="h2" sx={{display:'block', mt:10, mb:15}}>
    {month}월의 Best 애견 핫플레이스
  </Typography>
  <Container sx={{ display: 'flex', position: 'relative' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1, mb:10 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3
            }}
          >
            <Box sx={{ maxWidth: 400, maxHeight:'auto' }}>
              <Typography variant="h6" component="h2" sx={{ fontSize:27 }}>
                조선호텔팰리스 <br /> 멍캉스 전용 코너 스위트 오픈!
              </Typography>
              <Typography variant="body1" sx={{ mt:2 }}>
                우리 집 댕댕이를 위한 특별한 서비스 <br / >
                강아지와 함께하는 스위트 객실에서의 멍캉스!
              </Typography>
              <Typography variant="body2" sx={{ mt:2, textDecoration:'underline', fontWeight:'bold' }}>
                <Favorite fontSize='5'/> 예약 가능 기간 : 2020.12.29 - 2022.07.14 <br />
                <Favorite fontSize='5'/> 숙박 기간 : 2021.01.15 - 2022.07.14
              </Typography>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%', mt:3 }}
                href='https://jpg.josunhotel.com/package/get.do?packageSn=394786'
                target='blank'
              >
                예약 페이지로 이동
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              maxHeight:500,
              position: 'absolute',
              top: -80,
              left: -30,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(https://github.com/mui/material-ui/blob/master/docs/public/static/themes/onepirate/productCTAImageDots.png?raw=true)',
            }}
          />

          <Box
            component="img"
            src={pethotel}
            alt="pethotel"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />

        </Grid>

      </Grid>

    </Container>
    </Box>

  );
}

export default ProductCTA;
