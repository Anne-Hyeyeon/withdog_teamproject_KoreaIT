import React from 'react';
import { Box, Button, Container, LinearProgress, Stack } from '@mui/material';
import { QuestionData } from '../asset/data/questionData';

const Question = () => {
  return (
    <Container fixed>
      <Box style={{ textAlign: 'center' }}>
        <LinearProgress color="success" style={{ marginTop: '20px' }} />
        <Box sx={{ fontSize: '50px' }} >{QuestionData[0].title}</Box>
        <Stack direction="row" spacing={2} justifyContent="center" >
          <Button variant='contained' size='large'>{QuestionData[0].answera}</Button>
          <Button variant='contained' size='large'>{QuestionData[0].answerb}</Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Question;