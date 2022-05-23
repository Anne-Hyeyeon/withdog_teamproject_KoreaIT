import React from "react";
import Typography from "../modules/components/Typography";
import { Box } from "@mui/system";
import { useAuthState } from "react-firebase-hooks/auth";
import { authService } from "../fbase";


const Home = () => {
  // const auth = getAuth();
  // const user = auth.currentUser
  // const email = user.email;


  /* 사용자 정보 가져오기 */
  const [user] = useAuthState(authService);
  console.log(authService.currentUser)

  return(
    <Box sx={{ backgroundColor:'#ddd',display:'flex',justifyContent:'center', alignItems:'center'}}>
      <Typography sx={{ display:'inline-flex', fontSize:13, textAlign:'center', p:1 }}>
        Signed is as {user.displayName || user.email }, 저는 {user.photoURL} 에 살고 있습니다!
      </Typography>
    </Box>
  )
}

export default Home;