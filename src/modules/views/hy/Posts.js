import React, { useEffect, useState } from 'react';
import { dbService } from '../../../fbase';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import SettingPost from './SettingPost';
import { Container, Grid, Card, CardHeader, IconButton, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import { Comment, Favorite } from '@mui/icons-material';

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

    return (
        <Container maxWidth='sm' sx={{ py: 6 }}>
            {
                posts.length === 0 ? (
                    <Typography align='center' variant='h6'>아직 새로운 소식이 없어요!</Typography>
                ) : (
                    <Grid container>
                        {posts.map(({ id, title, desc, imageUrl, createdAt, createdBy, userId, likes, comments }) =>
                            <Grid item key={id} xs={12} sm={12} md={12}>
                                <Card key={id} variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 3, mb: 3 }}>
                                    <CardHeader
                                        action={
                                            <>
                                                {
                                                    userObj && userObj.uid === userId && (
                                                        <SettingPost userId={userId} userObj={userObj} id={id} imageUrl={imageUrl} />
                                                    )
                                                }
                                            </>
                                        }
                                        title={createdBy}
                                        subheader={createdAt.toDate().toDateString()}
                                    />
                                    {/* <Box></Box> */}
                                    <CardMedia
                                        component="img"
                                        width='100%'
                                        height="100%"
                                        image={imageUrl}
                                        alt="photo"
                                    />
                                    <CardContent>
                                        <Typography variant="h6">{title}</Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-wrap' }}>
                                            {desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites" sx={{ "&:hover": { color: 'red' } }} onClick={() => { alert("좋아요 기능 개발중입니다♥︎") }}>
                                            <Favorite />
                                        </IconButton>
                                        <IconButton aria-label="add to favorites" sx={{ "&:hover": { color: 'black' } }} onClick={() => { alert("코멘트 기능 개발중입니다♥︎") }}>
                                            <Comment />
                                        </IconButton>
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