import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MapContainer from './MapContainer';
import Typography from '../../../components/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Box, Button, Container, Stack} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
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
      <Typography variant="h4" marked="center" align="center" component="h2">
        Info
      </Typography>
      <Typography align="center" sx={{ mt:3 }}>
        댕댕이를 위한 장소 찾기!!
      </Typography>
      <Typography align="center" sx={{ mt:1 }}>
        내 위치에서 산책하기 좋은 공원은 어디일까?
      </Typography>
      <Typography align="right" sx={{ mt:3 }}>
        기본 위치 변경을 원하신다면 ?  &nbsp;&nbsp;&nbsp;
        <Link to="/mypage">
          <ArrowCircleRightIcon sx={{ color:"#f59b25" }} style={{ fontSize: '40px' }}/>
        </Link>
      </Typography>
      <Stack className="map_form">
        <Typography className="map_title" variant="h6" sx={{ mb:2 }}>
          현재 위치 : {userObj.photoURL}
        </Typography>
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
    </Container>
  );
}

export default Info;

