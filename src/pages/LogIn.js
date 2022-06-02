import React, { useState } from "react";
import { authService } from "../fbase";
import { useNavigate } from "react-router-dom";
import AppForm from "../modules/views/AppForm";
import Typography from "../modules/components/Typography";
import { Link, Box, TextField, FormControlLabel, Checkbox } from "@mui/material";
import Button from "../modules/components/Button";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

const Login=() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChange = (event)=>{
    const {target:{name, value}} = event
    if(name==='email'){
      setEmail(value)
    }
    else if(name==='password'){
      setPassword(value)
    }
  }

  const onSubmit= async (event)=>{
    event.preventDefault()
    if (email !== "" && password !== "") {
      try {
        await authService.signInWithEmailAndPassword(email,password);
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <>
    <Container maxWidth='xl'>
        <AppForm>
        <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
            <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onChange}
            />
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              color='secondary'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"아직 계정이 없다면? 회원가입!"}
                </Link>
              </Grid>
            </Grid>
        </Box>
        </AppForm>
    </Container>
    </>
  );
}

export default Login;