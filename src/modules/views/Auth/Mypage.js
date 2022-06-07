import React, { useState } from 'react';
import { authService } from '../../../fbase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserPostsMenu from './UserPostsMenu';
import Typography from '../../components/Typography';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { TextField, Button, Container, Grid } from '@mui/material';
import '../pages/info/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Postcode from '../pages/info/Postcode';

const Mypage = ({refreshUser, userObj}) => {
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
    alert('수정되었습니다.');
  }

  return (
    <Container className="info_container">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Mypage
      </Typography>
      <Typography variant="h5" component="div" sx={{ mt:3, mb:4 }}>
        <mark>{userObj.displayName}</mark>
        님, 안녕하세요 
        <FontAwesomeIcon  fontSize='25'  icon={faPaw} />
      </Typography>
      <form className="profile_form" onSubmit={onSubmit}>
        <Grid container spacing={1} >
          <Grid item xs={6}> 
            <li>이름 </li>
            <TextField p={2}
              id="standard-basic"
              variant="standard"
              fullWidth sx={{ m: 0.1 }}
              placeholder={userObj.displayName}
              value={newDisplayName} 
              onChange={onChangeName}
            />
          </Grid>
          <Grid item xs={12}>
            <li>주소 </li>
            <Grid item xs={6}>
              <TextField 
                id="standard-basic"
                variant="standard"
                fullWidth sx={{ m: 0.1 }} 
                placeholder={userObj.photoURL}
                value={newRegion} 
                onChange={onChangeRegion}
              />
            </Grid>
            <Grid item xs={6}>
              <Postcode address={newRegion} setAddress={setNewRegion}/>
            </Grid>
          </Grid>
          <Grid>
            <Button 
              className="btn_edit"
              type="submit" 
              size="large"
              startIcon={<DriveFileRenameOutlineIcon style={{ fontSize: '40px' }} />}>
              수정하기
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography align="right" sx={{ mt:3 }}>
        산책장소 추천이 궁금하다면 ? &nbsp;&nbsp;&nbsp;
        <Link to="/info">
          <ArrowCircleRightIcon sx={{ color:"#f59b25" }} style={{ fontSize: '40px' }}/>
        </Link>
      </Typography>
      <Typography align="right" sx={{ mt:3 }}>
        다른 강아지들의 일상이 궁금하다면 ? &nbsp;&nbsp;&nbsp;  
        <Link to="/blog">
          <ArrowCircleRightIcon sx={{ color:"#f59b25" }} style={{ fontSize: '40px' }}/>
        </Link>
      </Typography>
      <Grid >
        <UserPostsMenu userObj={userObj}>
        </UserPostsMenu>
      </Grid>
      <Button className="btn_logout" variant="outlined" onClick={onLogOutClick}>Log out</Button>
    </Container>
  );
}
export default Mypage;

