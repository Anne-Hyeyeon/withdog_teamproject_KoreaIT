import React, { useState } from 'react';
import { authService } from '../../../fbase';
import { Link, useNavigate } from 'react-router-dom';
import MapContainer from './MapContainer';
import SearchIcon from '@mui/icons-material/Search';
// import { SearchIcon, ArrowForwardIosIcon } from '@mui/icons-material';
import { TextField, Box, Button, Container, Typography, Stack} from '@mui/material';
import './style.css';

const Info = ({userObj}) => {
  const [newRegion, setNewRegion]=useState(userObj.photoURL);
  
  const onChangeRegion=(event)=>{
    const {target:{value}}=event;
    setNewRegion(value);
  }

  const onSubmit= (event)=>{
    event.preventDefault();
  }

  return (
    <Container className="info_container">
      <h1>주변 산책하기 좋은 곳</h1>
      <p className="info_up_wrap">
        프로필 변경을 원하신다면...
        <Link to="/mypage">
          &gt;&gt;&gt;
        </Link>
      </p>
      <Stack className="profile_form">
        <p>현재 위치 : {userObj.photoURL}</p>
        <Box>
          <TextField 
            id="standard-basic"
            variant="standard"
            placeholder={userObj.photoURL}
            value={newRegion} 
            onChange={onChangeRegion}
          />
          <Button 
            type="submit"
            onClick={onSubmit}
            startIcon={<SearchIcon style={{ fontSize: '30px' }} />}
          />
        </Box>
        <MapContainer searchPlace={newRegion+"공원"} />
      </Stack>
      <Box className="profile_list">
        
      </Box>
    </Container>
  );
}

export default Info;

