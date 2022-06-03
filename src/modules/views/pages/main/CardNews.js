import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function CardNews(props) {

  return (
    <Grid container spacing={2} sx={{ mb:10 }}>
           <Grid item xs={12} md={6} xl={6}>
          <CardActionArea component="a" href="https://n.news.naver.com/mnews/article/082/0001103270?sid=103" target='_blank'>
            <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ height:'200px', width:'100%' }}>                
            <Typography component="h2" variant="h5" sx={{ mt:5 }}>
                목욕 후 털만 잘 말려줘도 강아지 피부병 예방할 수 있다
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                부산일보
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image='https://cdn.pixabay.com/photo/2014/01/01/13/31/dog-237193_1280.jpg'
                alt='article'
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <CardActionArea component="a" href="https://n.news.naver.com/mnews/article/014/0004841271?sid=103" target='_blank'>
            <Card sx={{ display: 'flex' }}>
              <CardContent sx={{ height:'200px', width:'100%' }}>
                <Typography component="h2" variant="h5" sx={{ mt:5 }}>
                반려견 사료 결정하는 기준 - 성견을 기준으로 결정해야...
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                파이낸셜뉴스
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image='https://cdn.pixabay.com/photo/2016/01/25/10/45/girl-1160441_1280.jpg'
                alt='article'
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <CardActionArea component="a" href="https://newsis.com/view/?id=NISX20220523_0001881724" target='_blank'>
            <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ height:'200px', width:'100%' }}>                
            <Typography component="h2" variant="h5" sx={{ mt:5 }}>
                반려견, 이동가방에 넣지 않고 객실에 앉아 기차여행, 더 즐거워 
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                뉴시스
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image='https://cdn.pixabay.com/photo/2016/02/05/19/52/man-1181873_1280.jpg'
                alt='article'
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <CardActionArea component="a" href="https://www.insight.co.kr/news/396801" target='_blank'>
            <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ height:'200px', width:'100%' }}>                
            <Typography component="h2" variant="h5" sx={{ mt:5 }}>
                '어이구 그래쪄~?' 강아지에게 혀 짧은 소리 내면 사이가 더 돈독해진다고?
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                인사이트 뉴스
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image='https://cdn.pixabay.com/photo/2016/11/21/16/43/bulldog-1846380_1280.jpg'
                alt='article'
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <CardActionArea component="a" href="https://www.dailypop.kr/news/articleView.html?idxno=52292" target='_blank'>
            <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ height:'200px', width:'100%' }}>                
            <Typography component="h2" variant="h5" sx={{ mt:5 }}>
                강아지 건강관리를 위해 보호자가 꼭 알아야 할 4가지
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                데일리팝
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image='https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_1280.jpg'
                alt='article'
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <CardActionArea component="a" href="https://www.k-health.com/news/articleView.html?idxno=59514" target='_blank'>
            <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ height:'200px', width:'100%' }}>                
            <Typography component="h2" variant="h5" sx={{ mt:5 }}>
                유난히 작은 강아지, '간문맥전신단락' 의심하세요!
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                헬스경향
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image='https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
                alt='article'
              />
            </Card>
          </CardActionArea>
        </Grid>
       
    </Grid>
  );
}

export default CardNews;
