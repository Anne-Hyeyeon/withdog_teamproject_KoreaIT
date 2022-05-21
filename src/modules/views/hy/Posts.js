import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { dbService } from '../../../fbase';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"

function Posts(props) {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        const postRef = collection(dbService, "Blogboard")
        const postQuery = query(postRef, orderBy("createdAt", "desc"))
        onSnapshot(postQuery, (snapshot)=>{
            const posts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            setPosts(posts);
            console.log(posts);
        })
    })
    return (
        <div>
           {
               posts.length === 0 ? (
                   <p>No Posts Found!</p>
               ) : (
                   posts.map((post)=>
                   <Box sx={{ mt:3, border:1, p:3 }}>hi</Box>)
               )
           } 
        </div>
    );
}

export default Posts;