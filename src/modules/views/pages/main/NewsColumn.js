import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '../../../components/Typography';
import CardNews from './CardNews';

export default function NewsColumn() {
  return (
    <Container component="section" sx={{ mt: 8 }}>
      <Typography variant="h4" marked="center" align="center" component="h2" sx={{mb:10}}>
        반려견 관련 정보/칼럼
      </Typography>
      <CardNews />
    </Container>
  );
}
