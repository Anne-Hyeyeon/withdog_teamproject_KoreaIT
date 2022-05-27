import React from 'react';
import { Container } from '@mui/system';
import { Button, Card, CardActions, CardMedia, Grid } from '@mui/material';
import Typography from '../../../components/Typography';

const background = "https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg";

const Test = () => {

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

      <Grid container justifyContent="center">
        <Grid item maxWidth='sm'  >
          <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 3, my: 4 }}>

            <CardMedia
              component="img"
              width='100%'
              height="100%"
              image={background}
              alt="photo"
              sx={{ my: 4 }}
            />

            <CardActions >
              <Button variant="outlined" size="large" href="/testquestion">
                테스트 시작하기
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </Container >
  );
}

export default Test;