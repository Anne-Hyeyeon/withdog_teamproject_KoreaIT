import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React from 'react';
import { toast } from 'react-toastify';
import { dbService, storageService } from '../../../fbase';

function DeletePost({id, imageUrl}) {
    const handleDelete = async() =>{
        try {
            await deleteDoc(doc(dbService, "Posts", id))
            toast("Post deleted successfully", {type:"success"})
            const storageRef  = ref(storageService, imageUrl)
            await deleteObject(storageRef)

        } catch (error) {
            toast("Error deleting aricle", {type: "error"})
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