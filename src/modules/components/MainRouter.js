import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from "../../pages/Home"
import SignUp from "../../pages/SignUp"
import LogIn from "../../pages/LogIn";
import Blog from "../views/hy/Blog";
import Test from "../views/hw/Test";
import Main from "../views/Main";
import Info from "../views/sh/Info";

const MainRouter=({refreshUser,isLoggedIn,userObj})=>{
  console.log(isLoggedIn)
  return(
    <>
    {isLoggedIn && <Home userObj={userObj}/>}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home userObj={userObj}/>} />
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/test" element={<Test />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<LogIn />} /> 
            <Route path="/signup" element={<SignUp />} />  
          </>
        ) : (
          <>
      <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/test" element={<Test />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<LogIn />} /> 
            <Route path="/signup" element={<SignUp />} />  
          </>
        )}
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
      </>
  )

}
export default MainRouter