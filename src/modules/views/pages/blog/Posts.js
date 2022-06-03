import React, { useEffect, useState } from 'react';
import { dbService } from '../../../../fbase';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import SettingPost from './SettingPost';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardHeader, IconButton, CardMedia, CardContent, Typography, CardActions, CardActionArea } from '@mui/material';
import { Comment } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import LikePost from './LikePost';

function Posts({ userObj }) {
    const [posts, setPosts] = useState([])
  

    useEffect(() => {
        //collection, query 함수 가능 공부하기
        const postRef = collection(dbService, "Posts")
        const postQuery = query(postRef, orderBy("createdAt", "desc"))

        // onSnapshot 공부하기
        onSnapshot(postQuery, (snapshot) => {
            // firestore에 저장된 데이터를 불러옴. 
            // id 값은 명시, 나머지 데이터는 ...doc.data()로
            const posts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))

            //빈 배열이었던 post 안에 데이터를 집어넣음
            setPosts(posts);
        })
    })

    //링크 효과 없애기
  const mobileLinkStyle = {
    textDecoration:'none',
    color:'black',
  }

    return (
        
        <Container maxWidth='sm' sx={{ py: 6 }}>
            {
                posts.length === 0 ? (
                    <Typography align='center' variant='h6'>아직 새로운 소식이 없어요!</Typography>
                ) : (
                    <Grid container>
                        {posts.map(({ id, title, desc, imageUrl, createdAt, createdBy, userId, likes, comments }) =>
                            <Grid item key={id} xs={12} sm={12} md={12}>
                                <Card key={id} variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 3, mb: 3, pb:2 }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: 'secondary.dark', fontSize:15, textAlign:'center' }}>
                                            {createdBy}
                                          </Avatar>
                                        }
                                        action={
                                            <>
                                                {
                                                    userObj && userObj.uid === userId && (
                                                        <SettingPost userId={userId} 
                                                        id={id} imageUrl={imageUrl} desc={desc} title={title}/>
                                                    )
                                                }
                                            </>
                                        }
                                        title={createdBy}
                                        subheader={createdAt.toDate().toDateString() + "\u00a0" + createdAt.toDate().toLocaleTimeString([], {timeStyle: 'short'})}
                                    />
                                    <CardActionArea>
                                        <Link to={`/posts/${id}`}>
                                            <CardMedia
                                                component="img"
                                                width='100%'
                                                height="100%"
                                                image={imageUrl}
                                                alt="photo"
                                                
                                            />
                                        </Link>
                                    </CardActionArea>
                                    <CardContent>
                                        <Typography variant="h6">{title}</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-wrap', mt:1 }}>
                                            {desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display:'flex' }} disableSpacing>
                                        <LikePost userObj={userObj} id={id} likes={likes} />
                                    </CardActions>
                                    <CardActions sx={{ mt:-3, display:'flex' }} disableSpacing>
                                    <IconButton href={`/posts/${id}`} aria-label="add to favorites" sx={{ "&:hover": { color: 'black' } }}>
                                     <Comment />
                                    </IconButton>
                                    <Typography variant='body2'>
                                    <Link style={mobileLinkStyle} to={`/posts/${id}`}> 댓글 {comments.length}개 모두 보기</Link>
                                    </Typography>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                )
            }
        </Container>
    );
}

export default Posts;