import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React from 'react';
import { dbService, storageService } from '../../../fbase';

function DeletePost({id, imageUrl}) {
    const handleDelete = async() =>{
        try {
            await deleteDoc(doc(dbService, "Posts", id))
            alert('게시글이 삭제되었습니다.')
            const storageRef  = ref(storageService, imageUrl)
            await deleteObject(storageRef)

        } catch (error) {
            alert('삭제 실패')
            console.log(error)
        }

    }    
    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default DeletePost;