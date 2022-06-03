import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../../components/Typography';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { IconButton } from '@mui/material';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import productCurvyLines from '../../../assets/productCurvyLines.png';


const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ mt:-1, display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >

      <Container sx={{ mt: 15, mb: 15, display: 'flex', position: 'relative' }}>
      <Box
          component="img"
          src={productCurvyLines}
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box>
              <IconButton href='/blog'>
                <PeopleOutlineIcon sx={{ fontSize:'50px' }} />
                </IconButton>
              </Box>
              <Typography variant="h6" sx={{ my: 5, textAlign:'center' }}>
                Doggiter
              </Typography>
              <Typography variant="body1" sx={{ textAlign:'center' }}>
                {
                  '다른 견주들의 일상은 어떨까?' 
                } <br />
                {
                  '견주들만의 SNS 도기터를 통해 우리 집 강아지를 자랑하고, 다른 견주들의 이야기를 들어봐요!'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={item}>
              <Box>
              <IconButton href='test'>
                <EmojiEmotionsOutlinedIcon sx={{ fontSize:'50px' }} />
                </IconButton>
              </Box>
              <Typography variant="h6" sx={{ my: 5, textAlign:'center' }}>
                Dog MBTI Test
              </Typography>
              <Typography variant="body1" sx={{ textAlign:'center' }}>
                {
                  '내가 만약 강아지였다면?' 
                } <br />
                {
                  '견주인 내가 강아지가 된다면 어떤 종류일까? 지금 바로 테스트 하러 가기!'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={item}>
              <Box>
              <IconButton href='info'>
                <InfoOutlinedIcon sx={{ fontSize:'50px' }} />
                </IconButton>
              </Box>
              <Typography variant="h6" sx={{ my: 5, textAlign:'center' }}>
                Info
              </Typography>
              <Typography variant="body1" sx={{ textAlign:'center' }}>
                {
                  '내 주변 댕댕이를 위한 장소 찾기!' 
                } <br />
                {
                  '내 위치에서 가장 가까운 강아지 산책하기 좋은 공원은 어디일까? 위치 기반으로 견주한테 필요한 장소 정보가 궁금하다면 클릭!'
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
