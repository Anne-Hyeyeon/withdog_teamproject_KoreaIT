import React from 'react';
import DogImage from '../asset/Louis.jpg';
import { Box, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'


const Test = () => {
  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate('/testquestion')
  }
  return (
    <Container fixed>
      <header>강아지MBTI</header>
      <Box>
        <Box>나는 어떤 강아지?</Box>
        <Box>
          <img src={DogImage} width={340} height={450} alt="메인 사진" />
        </Box>
        <Box> MBTI를 기반으로 하는 "내가 개였다면!"</Box>
        <Button variant="contained" onClick={handleClickButton}>테스트 시작하기</Button>
      </Box>
    </Container>
  );
}

export default Test;