import React from 'react';
import { Link } from 'react-router-dom';
import Posts from './Posts';
import Typography from 'modules/components/Typography';
import { Container } from '@mui/system';
import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';


function Blog({ userObj }) {
    const fabBtnStyle = {
        margin: 0,
        top: 'auto',
        right: '5%',
        bottom: '5%',
        left: 'auto',
        position: 'fixed',
    };
    return (
        <Container maxWidth='sm' sx={{ mt:15 }}>
            <Typography variant="h4" marked="center" align="center" component="h2" >
            Doggitter
            </Typography>
            <Typography align="center" sx={{ mt:3}}>
            견주들만의 SNS 도기터! 
            </Typography>
            <Typography align="center" sx={{ mt:1 }}>
            다른 강아지들의 일상은 어떨까? 내 강아지 사진도 자랑하기!
            </Typography>
            <Posts userObj={userObj} />
            <Link style={fabBtnStyle}aria-label="add" to='/addposts'>
            <Fab color='primary'>
            <Add /> 
            </Fab>
            </Link>
        </Container>
    );
}

export default Blog;