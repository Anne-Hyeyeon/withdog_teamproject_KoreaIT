import React, { useState } from 'react';
import { authService } from '../../../fbase';
import { Link, useNavigate } from 'react-router-dom';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { TextField, Box, Button, Container, IconButton} from '@mui/material';
import './style.css';

const Info = ({refreshUser, userObj}) => {
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName]=useState(userObj.displayName);
  const [newRegion, setNewRegion]=useState(userObj.photoURL);
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
    <Box className="info_container">
      <h1>{userObj.displayName}</h1>
      <form className="profile_form" onSubmit={onSubmit}>
        <li>이름 : </li>
        <TextField 
          id="standard-basic"
          variant="standard"
          placeholder={userObj.displayName}
          value={newDisplayName} 
          onChange={onChangeName}
        />
        <li>주소 : </li>
        <TextField 
          id="standard-basic"
          variant="standard"
          placeholder={userObj.photoURL}
          value={newRegion} 
          onChange={onChangeRegion}
        />
        <Button 
          type="submit" 
          startIcon={<DriveFileRenameOutlineIcon style={{ fontSize: '30px' }} />}/>
      </form>
      <h1>{userObj.displayName}</h1>
      <h1>{userObj.photoURL}</h1>
      <Button variant="outlined" onClick={onLogOutClick}>Log out</Button>
    </Box>
  );
}
export default Info;

