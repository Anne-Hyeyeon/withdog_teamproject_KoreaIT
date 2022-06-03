import React from 'react';
import { Favorite } from '@mui/icons-material';
import { dbService } from '../../../../fbase';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function LikePost({ userObj, id,likes }) {
    
    const likesRef = doc(dbService, "Posts", id)
    const navigate = useNavigate()


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

    const userObjFalse = () => {
        alert('로그인 후 좋아요 가능합니다!')
        navigate('/login')
    }



    return (
        <>
        {userObj ? 
            <>
                <IconButton onClick={handleLike}>
                <Favorite className={`${!likes?.includes(userObj.uid)? "-o":""}`} sx={{ cursor:'pointer', color:likes?.includes(userObj.uid) ? "red" : null 
                }} />
                </IconButton>
                <Typography variant='body1'>
                    {likes.length} likes
                </Typography>
            </>
            :
            <>
                <IconButton onClick={userObjFalse}>
                <Favorite className={`${!likes?.includes(userObj.uid)? "-o":""}`} sx={{ cursor:'pointer', color:likes?.includes(userObj.uid) ? "red" : null 
                }} />
                </IconButton>
                <Typography variant='body1'>
                    {likes.length} likes
                </Typography>
            </>
        }
        </>
    );
}

export default LikePost;