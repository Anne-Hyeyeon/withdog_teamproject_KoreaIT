import React from "react";
import { getAuth } from "firebase/auth";
import Typography from "../modules/components/Typography";
import { Box } from "@mui/system";

function Home(){
  const auth = getAuth();
  const user = auth.currentUser
    const email = user.email;

  return(
    <Box sx={{ backgroundColor:'#ddd',display:'flex',justifyContent:'center', alignItems:'center'}}>
    <Typography sx={{ display:'inline-flex', fontSize:13, textAlign:'center', p:1 }}>
       안녕하세요, {email} 주인님! 오늘 날씨는 ~입니다. 산책하기 딱 좋은 날씨죠?
    </Typography>
    </Box>
  )
}

export default Home;