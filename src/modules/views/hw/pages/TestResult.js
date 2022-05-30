import React from 'react';
import { Box, Button, Container, Stack } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ResultData } from '../asset/data/resultData'
import ShareButton from '../components/ShareButton'
import Typography from '../../../components/Typography';



function Result() {
  const navigate = useNavigate()
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
        강아지 MBTI 결과
      </Typography>
      <Typography align="center" sx={{ mt: 3 }}>
        나의 MBTI는 {mbti}!
      </Typography>
      <Typography align="center" sx={{ mt: 1 }}>
        내가 강아지였다면 나는 {resultData.name}!
      </Typography>



      <Box component="div" sx={{ textAlign: 'center', mb: 2 }}>
        <img src={resultData.image} width={550} height={400} alt="결과 사진" />
      </Box>
      <Typography align="center" variant="h5" padding={2}>
        {resultData.desc}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <Button variant="contained" onClick={() => navigate('/testhome')} >테스트 다시하기</Button>
        <ShareButton data={resultData} />
      </Stack>

    </Container>
  );
}

export default Result;