import React from 'react';
import { Button, Card, CardMedia, Container, Grid, Stack } from '@mui/material';
import { useSearchParams } from 'react-router-dom'
import { ResultData } from '../../../assets/test/data/resultData'
import ShareButton from '../../../components/ShareButton'
import Typography from '../../../components/Typography';



function Result() {
  // const navigate = useNavigate()  // MUI Button에서 href 기능 대신 사용
  const [searchParams] = useSearchParams()
  const mbti = searchParams.get('mbti')
  const [resultData, setResultData] = React.useState({}) // 다른 resultdata(객체 형태로 초기화)

  // useEffect 공부 (값이 변하면 내용을 바꿔주는것 "Hook")
  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti)
    setResultData(result)
  }, [mbti])

  return (
    <Container maxWidth='md' sx={{ mt: 15 }}>

      <Typography variant="h4" marked="center" align="center" component="h2" >
        TEST RESULT
      </Typography>
      <Typography align="center" sx={{ mt: 3 }}>
        나의 MBTI는 {mbti}!
      </Typography>
      <Typography align="center" sx={{ mt: 1 }}>
        내가 강아지였다면 나는 {resultData.name}!
      </Typography>

      <Grid container justifyContent="center">
        <Grid item maxWidth='sm'  >
          <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 3, my: 4 }}>

            <CardMedia component="img" width='100%' height="100%" image={resultData.image} alt="photo">
            </CardMedia>

            <Typography align="center" variant="body1" padding={4}>
              {resultData.desc}
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
              <Button variant="outlined" href="/testhome">테스트 다시하기</Button>
              <ShareButton data={resultData} />
            </Stack>

          </Card>
        </Grid>
      </Grid>


    </Container>
  );
}

export default Result;