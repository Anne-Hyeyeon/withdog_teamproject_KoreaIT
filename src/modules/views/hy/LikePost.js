import React from 'react';
import { CookieSharp, Favorite } from '@mui/icons-material';
import { authService, dbService } from '../../../fbase';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { Box, IconButton, Typography } from '@mui/material';


function LikePost({ userObj, id,likes }) {
    
    const likesRef = doc(dbService, "Posts", id)

    const handleLike = () => {
        if(likes?.includes(userObj.uid)){
            updateDoc(likesRef,{
                likes:arrayRemove(userObj.uid),
            }).then (() => {
                console.log("unliked")
            }).catch((error) => {
                console.log(error);
            })
        }else {
            updateDoc(likesRef, {
                likes:arrayUnion(userObj.uid)
            }).then (() => {
                console.log("like")
            }).catch((error) => {
                console.log(error);
            })
        }
    }


    return (
        <>
            <IconButton onClick={handleLike}>
            <Favorite className={`${!likes?.includes(userObj.uid)? "-o":""}`} sx={{ cursor:'pointer', color:likes?.includes(userObj.uid) ? "red" : null 
            }} />
            </IconButton>
            <Typography variant='body1'>
                {likes.length} likes
            </Typography>
        </>
    );
}

export default LikePost;