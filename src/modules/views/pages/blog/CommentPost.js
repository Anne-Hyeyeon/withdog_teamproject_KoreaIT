import React, {useState, useEffect} from 'react';
import {Box, Typography, TextField, Grid, Button, Container } from '@mui/material';
import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { dbService } from '../../../../fbase';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import { v4 as uuid_v4 } from "uuid";
import { Avatar } from '@mui/material';


function CommentPost({ userObj,id }) {
    const [comment, setComment] = useState([])
    const [comments, setComments] = useState([])
    const commentRef = doc(dbService, "Posts", id)

    useEffect(() => {
        const docRef = doc(dbService, "Posts", id)
        onSnapshot(docRef, (snapshot)=>{
            setComments(snapshot.data().comments)
        })
      }, [id])



    const handleDeleteComment = async(comment) => {
        await updateDoc(commentRef,{
            comments: arrayRemove(comment)
        })
        .then((e)=>{
                alert('코멘트가 삭제되었습니다.')
        })
        .catch((error) => {
            console.log(error);
        })
        }


    const handleChangeKeyUpComment = async(e) => {
        if(e.key === "Enter" && e.target.value !== ""){
            await updateDoc(commentRef,{
                comments: arrayUnion({
                    user: userObj.uid,
                    userName : userObj.displayName,
                    comment : comment,
                    createdAt: new Date(),
                    commentId : uuid_v4()
                })
            })
            setComment("")
        }   
    }
    const handleChangeButtonComment = async (e) => {
        await updateDoc(commentRef,{
                comments: arrayUnion({
                    user: userObj.uid,
                    userName : userObj.displayName,
                    comment : comment,
                    createdAt: new Date(),
                    commentId : uuid_v4()
                })
            })
            setComment("") 
    }

        return (
              <Container>
                    <Box>
                        {comments.map(
                            ({ commentId, user, comment, userName, createdAt }) => 
                                <Box key={commentId}>
                                    <Grid container>
                                        <Grid item xs={11} md={11} xl={11}>
                                        <Box sx={{ display:'flex' , alignItems:'center', mb:1}}>
                                            <Avatar sx={{ textAlign:'center', mr:1, width:35, height:35, bgcolor: 'secondary.main', fontSize:13 }}>
                                            {userName}
                                            </Avatar> 
                                            <Typography variant='body2' sx={{ fontWeight:'bold', mr:1 }}> {userName} </Typography> 
                                            <Typography variant='body2'> : {comment}</Typography>
                                        </Box>
                                        </Grid>
                                        <Grid item xs={1} md={1} xl={1} textAlign='right' >
                                            { userObj.uid === user && (
                                            <IconButton sx={{ ml:2 }} onClick={() => handleDeleteComment({ commentId, user, comment, userName, createdAt })}>
                                            <ClearIcon />
                                            </IconButton>
                                            )}
                                        </Grid>
                                     </Grid>
                                </Box>
                        )} 
                         <Grid container sx={{mt:2}}> 
                         <Grid item xs={11} md={11} xl={11}>
                          <TextField variant='standard' value={comment || ""} onChange={(e)=>{ setComment(e.target.value) }} placeholder='댓글을 남겨주세요' onKeyPress={(e)=> handleChangeKeyUpComment(e)} fullWidth /> 
                        </Grid>
                          <Grid item xs={1} md={1} xl={1}>
                              <Button onClick={(e)=> handleChangeButtonComment(e)} fullWidth>게시</Button>
                          </Grid>
                          </Grid>
                    </Box>
              </Container>
            );
}

export default CommentPost;