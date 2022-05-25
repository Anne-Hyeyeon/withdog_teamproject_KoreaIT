import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ResultData } from '../asset/data/resultData'
import ShareButton from '../components/ShareButton'



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
    <Container maxWidth="md" >

      <Typography align="center" variant="h2" pt={2} mb={4}>
        강아지 MBTI 결과
      </Typography>
      <Typography align="center" variant="h4">
        {mbti} = {resultData.name}
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