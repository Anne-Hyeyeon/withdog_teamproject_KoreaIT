import React from 'react';
import DogImage from './asset/Louis.jpg';
import { Box, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const Test = () => {
  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate('/questions')
  }
  return (
    <Box>
      <header>강아지 MBTI</header>
      <Container>
        <title>나는 어떤 강아지?</title>
        <logoimage>
          <img src={DogImage} width={340} height={450} alt="루이 사진" />
        </logoimage>
        <desc> MBTI를 기반으로 하는 내가 개였다면!</desc>
        <Button variant="contained" onClick={handleClickButton}>테스트 시작하기</Button>
      </Container>
    </Box>
  );
}

export default Test;