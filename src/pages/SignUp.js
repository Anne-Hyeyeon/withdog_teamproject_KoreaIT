import React, { useState } from "react";
import { Link } from "@mui/material";
import { authService } from "../fbase";
import { useNavigate } from "react-router-dom";
import { getAuth,updateProfile } from "firebase/auth";
import { Container, Box } from "@mui/material";
import AppForm from "../modules/views/AppForm";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "../modules/components/Button";
import Typography from "../modules/components/Typography";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [region, setRegion] = useState("");

  const navigate = useNavigate();

  // Calling authentication function
  let auth = getAuth();

  const onChange = (event) => {
    const { target: { name, value } } = event
    if (name === 'email') {
      setEmail(value)
    }
    else if (name === 'password') {
      setPassword(value)
    }
    else if (name === 'userName') {
      setUserName(value)
    }
    else if (name === 'region') {
      setRegion(value)
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      try {
        await authService.createUserWithEmailAndPassword(email, password);
        await updateProfile(auth.currentUser,{displayName:userName,
        photoURL:region})
        navigate('/mainloggedin')
      } catch (error) {
        const errorCode = [
          'auth/email-already-in-use',
          'auth/invalid-email',
          'auth/invalid-password',
        ]
        const errorAlertMsg = [
          '중복된 이메일입니다. 다른 이메일을 사용하세요!',
          '올바른 형식의 이메일을 사용해 주세요',
          '패스워드는 6자 이상이어야 합니다.',
        ]
        for (const i in errorCode) {
          if (error.code === errorCode[i]) {
            alert(errorAlertMsg[i])
          }
        }
      }
    }
  };

  return (
    <>
    <Container maxWidth='xl'>
      <AppForm>
      <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  type="email"
                  autoFocus
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="userName"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  value={userName}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="address"
                  required
                  fullWidth
                  id="Address"
                  label="Address"
                  autoFocus
                  name="region"
                  value={region}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href='/login' variant="body2">
                  이미 계정이 있다면? 로그인
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        </AppForm>
      </Container>
    </>
  );
}

export default SignUp;