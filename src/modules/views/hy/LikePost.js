import React from 'react';
import { Favorite } from '@mui/icons-material';
import { authService } from '../../../fbase';

function LikePost(userObj, id,likes) {
    return (
        <div>
            <Favorite className={`${!likes?.includes(userObj.uid)? "-d":""}`} sx={{ cursor:'pointer' }} />
        </div>
    );
}

export default LikePost;