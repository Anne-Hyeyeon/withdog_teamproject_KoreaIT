import React, { useState } from 'react';
import { authService } from '../../../fbase';
import { Link, useNavigate } from 'react-router-dom';
import UserPosts from './UserPosts';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { TextField, Box, Button, Container, IconButton, Grid} from '@mui/material';
import './style.css';

const Info = ({refreshUser, userObj}) => {
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName]=useState(userObj.displayName);
  const [newRegion, setNewRegion]=useState(userObj.photoURL);
  const [newPassword, setNewPassword]=useState(userObj.password);
  const onLogOutClick=()=>{
    authService.signOut();
    navigate('/');
  }

  const onChangeName=(event)=>{
    const {target:{value}}=event;
    setNewDisplayName(value);
  }
  const onChangeRegion=(event)=>{
    const {target:{value}}=event;
    setNewRegion(value);
  }

  const onSubmit= async(event)=>{
    event.preventDefault();
    if(userObj.displayName !== newDisplayName || userObj.photoURL !== newRegion){
      await userObj.updateProfile({
        displayName: newDisplayName,
        photoURL:newRegion
      })
      refreshUser()
    }
  }
  // console.log(user);

  return (
    <Container className="info_container">
      <h1>{userObj.displayName}</h1>
      <form className="profile_form" onSubmit={onSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}> 
            <li>이름 </li>
            : <TextField p={2}
              id="standard-basic"
              variant="standard"
              placeholder={userObj.displayName}
              value={newDisplayName} 
              onChange={onChangeName}
            />
          </Grid>
          <Grid item xs={12}>
            <li>주소 </li>
            : <TextField 
              id="standard-basic"
              variant="standard"
              placeholder={userObj.photoURL}
              value={newRegion} 
              onChange={onChangeRegion}
            />
          </Grid>
          <Grid>
            <Button 
              type="submit" 
              startIcon={<DriveFileRenameOutlineIcon style={{ fontSize: '40px' }} />}>
              수정하기
            </Button>
          </Grid>
        </Grid>
      </form>
      <UserPosts/>
      {/* <Box>
        {
        userObj && userObj.uid === userId && (
          <UserPosts/>
        )
        }
      </Box> */}
      <Button variant="outlined" onClick={onLogOutClick}>Log out</Button>
    </Container>
  );
}
export default Info;

