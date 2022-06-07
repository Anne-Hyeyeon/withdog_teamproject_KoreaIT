import React from 'react';
import { Button, Card, CardMedia, Container, Grid, LinearProgress, Stack } from '@mui/material';
import { QuestionData } from '../../../assets/test/data/questionData';
import { createSearchParams, useNavigate } from 'react-router-dom';
import Typography from '../../../components/Typography';


const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0)
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 }
  ]) // 답변을 눌렀을때 점수가 올라가게

  /* 테스트 로직 ( 3문제씩 총 12문제 )
  E(외향형) 1점 / I(내향형) 0점
  S(감각형) 1점 / N(직관형) 0점
  T(소개형) 1점 / F(감정형) 0점
  J(판단형) 1점 / P(인식형) 0점
  "각 2점 이상일 격우 왼쪽 타입으로 지정"
  */


  const navigate = useNavigate()

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    )
    setTotalScore(newScore)
    // 다음문제로 문제수 증가
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1)
    } else {
      // mbti 도출 (reduce, acc 공부)
      // 총 점수가 2점이하면 id값 (예.E&I 중 첫번째 글자 가져오고 이상이면 두번째)
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)), ""
      )
      // 결과 페이지로 이동
      // createSearchParams 공부 (mbti값 결과 페이지로 보내기)
      navigate({
        pathname: '/testresult',
        search: `?${createSearchParams({
          mbti: mbti
        })}`
      })
    }
  }

  return (

    <Container maxWidth='sm' sx={{ mt: 15 }}>

      <Typography variant="h4" marked="center" align="center" component="h2" sx={{ mb: 2 }}>
        MBTI TEST
      </Typography>


      <Grid container justifyContent="center"  >

        <Grid item  >
          <Typography align="center" sx={{ fontSize: '50px' }}>
            {QuestionData[questionNo].id}
          </Typography>
          <Typography variant="h4" align="center" sx={{ fontSize: '20px' }}>
            {QuestionData[questionNo].title}
          </Typography>
        </Grid>

        <Grid item align="center" xs={12} >
          <Card variant="outlined" sx={{ width: '100%', justifyContent: 'center', borderRadius: 3, my: 4 }}>
            <CardMedia
              component="img"
              image={QuestionData[questionNo].image}
              alt="dog"
            />
          </Card>
        </Grid>

        <Stack>
          <Button variant='text' size='large' onClick={() => handleClickButton(1, QuestionData[questionNo].type)}>{QuestionData[questionNo].answera}</Button> { /*변수를 넣을라면 화살표함수*/}
          <Button variant='text' size='large' sx={{ mb: 2 }} onClick={() => handleClickButton(0, QuestionData[questionNo].type)}>{QuestionData[questionNo].answerb}</Button>
        </Stack>

        <Grid item xs={12} >
          <LinearProgress variant="determinate" value={10 + (questionNo / QuestionData.length) * 100} />
          <Typography align="center">{questionNo + 1}/12</Typography>
        </Grid>

      </Grid>


    </Container>
  );
}

export default Question;