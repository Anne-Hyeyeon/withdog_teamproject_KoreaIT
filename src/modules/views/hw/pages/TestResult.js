import React from 'react';
import { Box, Button, Container, Stack } from '@mui/material';
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
    <Container maxWidth="md" component="main" >
      <header>강아지MBTI</header>
      <Box>
        <Box>{mbti} = {resultData.name}</Box>
        <Box>
          <img src={resultData.image} width={550} height={400} alt="메인 사진" />
        </Box>
        <Box> {resultData.desc} </Box>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" onClick={() => navigate('/testhome')} >테스트 다시하기</Button>
          <ShareButton data={resultData} />
        </Stack>
      </Box>
    </Container>
  );
}

export default Result;