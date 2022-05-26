import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { dbService, storageService } from '../../../fbase';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, IconButton } from '@mui/material';

function SettingPost({id, imageUrl}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleDelete = async() =>{
        try {
            await deleteDoc(doc(dbService, "Posts", id))
            alert('게시글이 삭제되었습니다.')
            const storageRef  = ref(storageService, imageUrl)
            await deleteObject(storageRef)

        } catch (error) {
            console.log(error)
        }

    }    
    return (
        <div>
             <IconButton 
                id={id} 
                aria-label="settings" 
                aria-controls={open ? 'setting-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} 
                >
                <MoreVert />
                </IconButton>
                <Menu
                id={id}
                aria-labelledby="basic-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                elevation={1}
                >
                <MenuItem onClick={handleDelete}>
                Delete
                </MenuItem>
                <MenuItem onClick={handleClose}>Edit(개발중)</MenuItem>
            </Menu>
        </div>
    );
}

export default SettingPost