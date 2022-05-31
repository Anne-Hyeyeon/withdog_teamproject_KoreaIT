import React, { useState } from 'react';
import { deleteDoc,updateDoc, getDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { dbService, storageService } from '../../../fbase';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function SettingPost({id, imageUrl}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [editing, setEditing] = useState(false)
    const [editedPost, setEditedPost] = useState("")


    /*Dialog*/
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const handleClickOpenEditDialog = () => {
        setOpenEditDialog(true);
      };
      const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
      };



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

    const handleEdit = async (e) => {
        e.preventDefault()
        try{
            await updateDoc(doc(dbService, 'Posts', id), {
                title: '이것으로',
                desc: '이것으로'
            })
            handleClose()
        } catch (error) {
            alert(error)
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
                <MenuItem onClick={handleClickOpenEditDialog}>Edit</MenuItem>
                <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                    <DialogTitle>게시글 수정하기</DialogTitle>
                    <DialogContent>
                            제목 : <TextField placeholder='랄라' />
                            내용 : <TextField placeholder='랄라' />
                    </DialogContent>
                </Dialog>
            </Menu>
        </div>
    );
}

export default SettingPost