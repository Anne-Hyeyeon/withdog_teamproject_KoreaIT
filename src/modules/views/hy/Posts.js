import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { dbService } from '../../../fbase';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import DeletePost from './DeletePost';

function Posts(props) {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        //collection, query 함수 가능 공부하기
        const postRef = collection(dbService, "Posts")
        const postQuery = query(postRef, orderBy("createdAt", "desc"))
        
        // onSnapshop 공부하기
        onSnapshot(postQuery, (snapshot)=>{
                // firestore에 저장된 데이터를 불러옴. 
                // id 값은 명시, 나머지 데이터는 ...doc.data()로
            const posts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))

            //빈 배열이었던 post 안에 데이터를 집어넣음
            setPosts(posts);
        })
    })
    return (
        <div>
           {
               posts.length === 0 ? (
                   <p>No Posts Found!</p>
               ) : (
                   posts.map(({id,title,desc,imageUrl,createdAt})=>
                   <Box 
                   sx={{ mt:3, border:1, p:3 }}
                   key={id}>
                       <Box className="row">
                           <Box className="col-3">
                               <img 
                               src={imageUrl} 
                               alt={title}
                               style={{ height:180, width:180 }} />
                           </Box>
                           <Box className="col-9 ps-3">
                               <h2>{title}</h2>
                               <p>{createdAt.toDate().toDateString()}</p>
                               <h4>{desc}</h4>
                               <DeletePost id={id} imageUrl={imageUrl} />
                           </Box>
                       </Box>
                    </Box>)
               )
           } 
        </div>
    );
}

export default Posts;