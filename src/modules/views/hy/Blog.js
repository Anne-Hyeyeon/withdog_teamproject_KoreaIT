import React from 'react';
import { Container, Box } from '@mui/system';
import Posts from './Posts'
import AddPosts from './AddPosts';

function Blog({ userObj }) {
    return (
        <Container sx={{ display:'flex', justifyContent:'flex-end'}} maxWidth='xl'>
            <Box>
            <Posts userObj={userObj} />
            </Box>
            <Box>
            <AddPosts userObj={userObj} />
            </Box>
        </Container>
    );
}

export default Blog;