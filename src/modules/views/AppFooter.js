import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

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
      sx={{ mt:15, display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={2} sm={2} md={2} sx={{ mb:7 }}>
            <Typography variant="h6" marked="left" gutterBottom>
              Doggitter
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/blog">Doggitter</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Dog MBTI
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/test">Dog MBTI</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
          <Typography variant="h6" marked="left" gutterBottom>
              Info
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/info">Info</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
          <Typography variant="h6" marked="left" gutterBottom>
              MyPage
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/">My profile </Link>
              </Box>
            </Box>
          </Grid>
         
          <Grid item>
          <Copyright />
            <Typography variant="caption">
              {'  This site is created by '}
              <Link href="https://www.freepik.com" rel="sponsored" title="Freepik">
                김소희
              </Link>
              {', '}
              <Link href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
                김혜연
              </Link>
              {', '}
              <Link href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
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
