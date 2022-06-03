import React, { useState } from 'react'; 
import { Box, Container } from '@mui/material';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storageService, dbService} from '../../../../fbase'
import { useNavigate } from 'react-router-dom';
import Login from '../../Auth/LogIn'
import AppForm from '../../../components/AppForm';
import Typography from '../../../components/Typography';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import Button from '../../../components/Button';

const AddPosts = ({ userObj }) => {

    const navigate = useNavigate();
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
            alert('모든 항목을 채워주세요!')
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
                image: "",
            })
            getDownloadURL(uploadImage.snapshot.ref)
            .then(url=>{
                const postRef = collection(dbService, "Posts")
                addDoc(postRef,{
                    title: formData.title,
                    desc: formData.desc,
                    imageUrl: url,
                    createdAt: Timestamp.now().toDate(),
                    createdBy: userObj.displayName,
                    userId: userObj.uid,
                    likes:[],
                    comments:[]
                })
                .then(()=>{
                    alert('추가되었습니다.')
                    navigate('/blog')
                })
                .catch(err=>{
                    alert('실패했습니다')
                })
            })
        })
    }

    return (
        <Container maxWidth='xl' sx={{ mt:15, mb:10 }}>
        {!userObj ?
        <>
        <Box sx={{mt:-15}}>
        <Login />
        </Box>
        </> :
            <Box sx={{p:3, mt:-20 }}>
                       <AppForm>
                       <Typography variant="h3" gutterBottom marked="center" align="center">
                       게시글 작성하기
                    </Typography>
                <Box component="form" onSubmit={handlePublish} noValidate sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                <TextField
                  label="제목"
                  autoComplete="title"
                  name="title"
                  className="form-control"
                  required
                  fullWidth
                  id="title"
                  placeholder="제목을 입력하세요"
                  type="text"
                  autoFocus
                  value={formData.title}
                  onChange={(e)=>handleChange(e)}
                />
              </Grid>

                {/* description */}
                <Grid item xs={12} sm={12}>
                <TextField
                name="desc"
                id="contents"
                label="내용"
                multiline
                fullWidth
                rows={10}
                value={formData.desc}
                onChange={(e)=>handleChange(e)}
                className="form-control"
                required
                placeholder="오늘 무슨 일이 있었나요?"
                />
                </Grid>
                {/* image */}
                <Grid item xs={12} sm={12}>
                <TextField
                autoFocus
                type="file"
                name="image" 
                accept="image/*"
                className="form-control" 
                onChange={(e)=>handleImageChange(e)}
                fullWidth
                />
                </Grid>
                {/* progressbar */}
                <Grid item xs={12} sm={12}>
                {progress === 0 ? null : (
                    <div className="progress">
                    <span className="sr-only" style={{ width:`${progress}%` }}>{`업로드 중입니다 ${progress}`}</span>
                    </div>
                )}
                </Grid>
                <Grid item xs={12} sm={12}>
                <Button 
                color='secondary'
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="form-control"
                onClick={handlePublish}>업로드</Button>
                </Grid>
                </Grid>
                </Box>
            </AppForm>
            </Box>}

        </Container>
    );
}

export default AddPosts;