import React from 'react';
import { Favorite } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { authService } from '../../../fbase';

function LikePost(id,likes) {
    const [user] =  useAuthState(authService)
    return (
        <div>
            <Favorite className={`${!likes?.includes(user.uid)? "-d":""}`} sx={{ cursor:'pointer' }} />
        </div>
    );
}

export default LikePost;