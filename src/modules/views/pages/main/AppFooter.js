import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../../../components/Typography';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="/">
        WithDog
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ mt:10, display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={3} sm={3} md={3} sx={{ mb:7 }}>
            <Typography variant="h6" marked="left" gutterBottom sx={{fontSize: {xs:13, md:20}}}>
              Doggitter
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5, fontSize:{xs:12, md:15} }}>
                <Link href="/blog">Doggitter</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} sm={3} md={3} >
            <Typography variant="h6" marked="left" gutterBottom sx={{fontSize: {xs:13, md:20}}}>
              Dog MBTI
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5, fontSize:{xs:12, md:15}  }}>
                <Link href="/test">Dog MBTI</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} sm={3} md={3} >
          <Typography variant="h6" marked="left" gutterBottom sx={{fontSize: {xs:13, md:20}}}>
              Info
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5, fontSize:{xs:12, md:15}  }}>
                <Link href="/info">Info</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} sm={3} md={3} >
          <Typography variant="h6" marked="left" gutterBottom sx={{fontSize: {xs:13, md:20}}}>
              MyPage
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5, fontSize:{xs:12, md:15}  }}>
                <Link href="/">My profile </Link>
              </Box>
            </Box>
          </Grid>
         
          <Grid item>
          <Copyright />
            <Typography variant="caption">
              {'  This site is created by '}
              <Link rel="sponsored" title="SoHee">
                김소희
              </Link>
              {', '}
              <Link rel="sponsored" title="HyeYeon">
                김혜연
              </Link>
              {', '}
              <Link rel="sponsored" title="HyeongWon">
                서형원
              </Link>
              {' of Korea IT Academy Sinchon. '}

            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
