import React from 'react';
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';

//import { useNavigate } from 'react-router-dom'

const background = "https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg";

const Test = () => {
  // const navigate = useNavigate()
  // const handleClickButton = () => {
  //   navigate('/testquestion')
  // }
  return (
    <Container maxWidth='xl' sx={{ mt: 15 }}>
      <Typography variant="h4" marked="center" align="center" component="h2" >
        Dog MBTI
      </Typography>
      <Typography align="center" sx={{ mt: 3 }}>
        나는 어떤 강아지 일까?
      </Typography>
      <Typography align="center" sx={{ mt: 1 }}>
        MBTI를 기반으로 하는 "내가 강아지라면?!"
      </Typography>

      <Grid container>
        <Grid item maxWidth='sm'>
          <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 3, mb: 3 }}>
            asfasdf
          </Card>
        </Grid>
      </Grid>



      <Box maxWidth='sm'
        sx={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          //position: 'relative',
          //display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          //color: '#fff',
          height: '80vh',
          width: '100%',
          minHeight: 500,
          maxHeight: 1300,
          mt: 6
        }
        } >

        <Typography align="center" variant="h2">
          나는 어떤 강아지 일까?
        </Typography>

        <Typography align="center" variant="h5" sx={{ mb: 2, mt: 4 }}>
          MBTI를 기반으로 하는 "내가 강아지라면?!"
        </Typography>

        <Typography align="center">
          <Button variant="outlined" size="large" href="/testquestion">
            테스트 시작하기
          </Button>
        </Typography>

      </Box >

    </Container>
  );
}

export default Test;