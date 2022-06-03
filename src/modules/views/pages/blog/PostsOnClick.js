import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dbService } from '../../../../fbase';
import { Container,Grid,Card,CardHeader,Avatar,CardMedia,CardContent,Typography, Box, } from '@mui/material';
import CommentPost from './CommentPost';
import Login from '../../Auth/LogIn';
import { Link } from 'react-router-dom';

function PostsOnClick({ userObj,comments}) {
     const {id} = useParams();
     const [post, setPost] = useState(null);
     useEffect(
         ()=>{
             const docRef = doc(dbService, "Posts", id)
             onSnapshot(docRef, (snapshot)=>{
                setPost({...snapshot.data(),id:snapshot.id})
             })
         }
     )
    return (
        <>
        {!userObj ?                         
            <>
            <Box>
            <Login />
            </Box>
            </> : 
                    <Container maxWidth='sm' sx={{ mt:15, py: 3, border:'1px solid #eee', borderRadius:3 }}>
                   {
                       post && (
                           <>
                       <Box>
                           <CardHeader
                           avatar={
                               <Avatar sx={{ textAlign:'center', bgcolor: 'secondary.dark', fontSize:15 }}>
                               {post.createdBy}
                               </Avatar>
                           }
                           title={post.createdBy}
                           subheader={post.createdAt.toDate().toDateString() + "\u00a0" + post.createdAt.toDate().toLocaleTimeString([], {timeStyle: 'short'})}
                           />
                            <Grid container spacing={2} sx={{ mb:5 }}>
                            <Grid item xs={12} md={12} xl={12}>
                                   <Card sx={{ display: 'flex' }}>
                                   <CardContent sx={{ height:'200px', width:'100%' }}>                
                                   <Typography component="h6" variant="h5" sx={{ mt:5, mb:2 }}>
                                       {post.title}
                                       </Typography>
                                       <Typography variant="body2" color="text.secondary">
                                       {post.desc}
                                       </Typography>
                                   </CardContent>
                                    <Link to="/blog">
                                   <CardMedia
                                       component="img"
                                       sx={{ width: 200, display: { sm: 'block' } }}
                                       image={post.imageUrl}
                                       alt={id}
                                   />
                                   </Link>
                                   </Card>
                               </Grid>
                           </Grid>
                           <CommentPost id={id} userObj={userObj} comments={comments} />
                           </Box>
                       </>
                       )
                   }
               </Container>
            }
        </>
    );
}

export default PostsOnClick;