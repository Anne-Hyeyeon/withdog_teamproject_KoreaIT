import React, { useState } from 'react';
import { deleteDoc,updateDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { dbService, storageService } from '../../../../fbase';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import Typography from '../../../components/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';

function SettingPost({id, imageUrl, desc, title}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [state, setState] = useState({
        title : title,
        desc : desc
    })


    /*Dialog : 팝업창*/
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const handleClickOpenEditDialog = () => {
        setOpenEditDialog(true);
      };
      const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
      };

      // Tab 버튼 눌렀을 때 화면 안 꺼지게
      const stopPropagationForTab = (event) => {
        if (event.key === "Tab") {
          event.stopPropagation();
        }
      };

     /* SettingPost 아이콘 메뉴 */
    const handleClickOpenSettingMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseSettingMenu = () => {
      setAnchorEl(null);
    };

    
    const userRef = doc(dbService, "Posts", id)

    /* delete 기능 */
    const handleDelete = async() =>{
        try {
            if (window.confirm('정말로 삭제하시겠습니까?')) {
                await deleteDoc(userRef)
                alert('게시글이 삭제되었습니다.')
                const storageRef  = ref(storageService, imageUrl)
                await deleteObject(storageRef)
              } else {
                handleCloseSettingMenu()
              }
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        try{
            await updateDoc(userRef, {
                title: state.title,
                desc: state.desc
            })
            alert('게시글이 수정되었습니다.')
            handleCloseSettingMenu()
            handleCloseEditDialog()
        } catch (error) {
            alert(error)
        }

    } 


    const handleStateChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }


    return (
        <div>
             <IconButton 
                id={id} 
                aria-label="settings" 
                aria-controls={open ? 'setting-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickOpenSettingMenu} 
                >
                <MoreVert />
                </IconButton>
                <Menu
                id={id}
                aria-labelledby="basic-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseSettingMenu}
                elevation={1}
                >
                <MenuItem onClick={handleClickOpenEditDialog}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>
                Delete
                </MenuItem>
                <Dialog open={openEditDialog} onClose={handleCloseEditDialog} onKeyDown={stopPropagationForTab}>
                    
                    <DialogTitle sx={{p: 4, textAlign:'center'}}>
                    <FontAwesomeIcon icon={faDog} /> 게시글 수정하기</DialogTitle>
                    <DialogContent>
                    <Typography>제목</Typography>
                    <TextField name='title' type='text' value={state.title}
                        onChange={handleStateChange} fullWidth sx={{ mb:1 }}
                        />
                    <Typography>내용</Typography>
                        <TextField name='desc' type='text' value={state.desc}
                        onChange={handleStateChange} fullWidth multiline rows={6}
                        />
                    <Button
                    color='secondary'
                    onClick={handleEdit}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3 }}
                    >
                    수정하기                     
                    </Button>
                    <Typography sx={{ fontSize:13, textAlign:'right', textDecoration:'underline', mt:1}} onClick={handleCloseEditDialog}>취소하기</Typography>
                    </DialogContent>
                </Dialog>
            </Menu>
        </div>
    );
}

export default SettingPost