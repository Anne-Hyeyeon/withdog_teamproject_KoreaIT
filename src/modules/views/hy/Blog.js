import React from 'react';
import { Container, Box } from '@mui/system';
import Posts from './Posts'
import AddPosts from './AddPosts';

function Blog(props) {
    return (
        <Container sx={{ display:'flex', justifyContent:'flex-end'}} maxWidth='xl'>
            <Box>
            <Posts />
            </Box>
            <Box>
            <AddPosts />
            </Box>
        </Container>
    );
}

export default Blog;