import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { Container, Grid, Card, CardHeader, IconButton, CardMedia, CardContent, CardActions } from '@mui/material';
import { Comment, Favorite } from '@mui/icons-material';
import Typography from '../../components/Typography';
import { dbService } from '../../../fbase';
import SettingPost from '../hy/SettingPost';

function Posts({ userObj }) {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const postRef = collection(dbService, "Posts")
    const postQuery = query(postRef, orderBy("createdAt", "desc"))
    
    onSnapshot(postQuery, (snapshot)=>{
      const posts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPosts(posts);
    })
  })
  
  return (
    <Container maxWidth='sm' sx={{ py:6 }}>
      <Grid container>
        { posts.map(({id,title,desc,imageUrl,createdAt,userId})=>  
          <Grid item key={id} xs={12} sm={12} md={12}>
            {userObj && userObj.uid === userId ? (
              <Card key={id} variant="outlined" sx={{ maxWidth:'100%', maxHeight: '100%', borderRadius:3, mb:3 }}>
                <CardHeader
                  action={
                    <SettingPost userId={userId} userObj={userObj} id={id} imageUrl={imageUrl} desc={desc} title={title} />
                  }
                  subheader={createdAt.toDate().toDateString()}
                />
                <CardMedia
                  component="img"
                  width='100%'
                  height="100%"
                  image={imageUrl}
                  alt="photo"
                />
                <CardContent>
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ whiteSpace:'pre-wrap'}}>
                  {desc}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites" sx={{ "&:hover" : { color : 'red'}}} onClick={()=>{alert("좋아요 기능 개발중입니다♥︎")}}>
                  <Favorite /> 
                  </IconButton>
                  <IconButton aria-label="add to favorites" sx={{ "&:hover" : { color : 'black'}}} onClick={()=>{alert("코멘트 기능 개발중입니다♥︎")}}>
                  <Comment /> 
                  </IconButton>
                </CardActions>
              </Card>
            ) : (
              null
            )}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Posts;