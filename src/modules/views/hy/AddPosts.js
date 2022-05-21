import React, { useState } from 'react'; 
import { Box, Container } from '@mui/material';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storageService, dbService } from '../../../fbase';
import { toast } from 'react-toastify';

function AddPosts(props) {
    const [formData, setFormData] = useState({
        title: "",
        desc: "",
        image: "",
        createdAt: Timestamp.now().toDate()
    })

    const [progress, setProgress] = useState(0);

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value})
    }

    const handleImageChange=(e)=>{
        setFormData({
            ...formData,
            image: e.target.files[0]
        })
    }

    const handlePublish = () =>{
        if(!formData.title || !formData.desc || !formData.image){
            alert('Please fill all the fields')
            return;
        }
        // ref 뭔지 확인!
        const storageRef = ref(storageService, `/images/${Date.now()}${formData.image.name}`)

        const uploadImage = uploadBytesResumable(storageRef, formData.image)

        uploadImage.on("state_changed", (snapshot) => {
            const progressPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            setProgress(progressPercent)
        },
        (err)=>{
            console.log(err);
        },
        ()=>{
            setFormData({
                title: "",
                desc: "",
                image: ""
            })
            getDownloadURL(uploadImage.snapshot.ref)
            .then(url=>{
                const postRef = collection(dbService, "Posts")
                addDoc(postRef,{
                    title: formData.title,
                    desc: formData.desc,
                    imageUrl: url,
                    createdAt: Timestamp.now().toDate(),
                })
                .then(()=>{
                    toast("Article added successfully", {type: "success"})
                })
                .catch(err=>{
                    toast("Error adding article", {type: "error"})
                })
            })
        })
    }

    return (
        <Container maxWidth='xl'>
            <Box sx={{ border:1, p:3, mt:3 }}>
                <h2>Create Post</h2>
                {/* title */}
                <label htmlFor="">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    className="form-control" 
                    value={formData.title}
                    onChange={(e)=>handleChange(e)} 
                    />

                {/* description */}
                <label htmlFor="">Description</label>
                <textarea 
                    name="desc" 
                    className="form-control" 
                    value={formData.desc}
                    onChange={(e)=>handleChange(e)}
                    />

                {/* image */}
                <label htmlFor="">Image</label>
                <input 
                    type="file" 
                    name="image" 
                    accept="image/*"
                    className="form-control" 
                    onChange={(e)=>handleImageChange(e)}
                    />

                {/* progressbar */}
                {progress === 0 ? null : (
                    <div className="progress">
                    <span className="sr-only" style={{ width:`${progress}%` }}>{`uploading image ${progress}`}</span>
                    </div>
                )}

                <button 
                className="form-control"
                onClick={handlePublish}>Publish</button>
            </Box>
        </Container>
    );
}

export default AddPosts;