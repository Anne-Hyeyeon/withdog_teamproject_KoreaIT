import React from "react";
import { Routes, Route } from 'react-router-dom'
import SignUp from "../../pages/SignUp"
import LogIn from "../../pages/LogIn";
import Blog from "../views/hy/Blog";
import Test from "../views/hw/Test";
import TestQuestion from "../views/hw/pages/TestQuestion";
import TestResult from "../views/hw/pages/TestResult";
import TestHome from "../views/hw/pages/TestHome"
import Main from "../views/Main";
import MainLoggedIn from "../views/MainLoggedIn"
import Info from "../views/sh/Info";
import Mypage from "../views/sh/Mypage";
import AddPosts from "../views/hy/AddPosts";


const MainRouter = ({ refreshUser, isLoggedIn, userObj }) => {

  return (
    <>
      {/* {isLoggedIn && <Home userObj={userObj} />} */}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<MainLoggedIn userObj={userObj} />} />
            <Route path="/mainloggedin" element={<MainLoggedIn userObj={userObj} />} />
            <Route path="/blog" element={<Blog userObj={userObj} />} />
            <Route path="/test" element={<Test />} />
            <Route path="/testhome" element={<TestHome />} />
            <Route path="/testquestion" element={<TestQuestion />} />
            <Route path="/testresult" element={<TestResult />} />
            <Route path="/info" element={<Info userObj={userObj} refreshUser={refreshUser}/>} />
            <Route path="/mypage" element={<Mypage userObj={userObj} refreshUser={refreshUser}/>} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addposts" element={<AddPosts userObj={userObj} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Main />} />
            <Route path="/main" element={<Main />} />
            <Route path="/blog" element={<Blog userObj={userObj} />} />
            <Route path="/test" element={<Test />} />
            <Route path="/testhome" element={<TestHome />} />
            <Route path="/testquestion" element={<TestQuestion />} />
            <Route path="/testresult" element={<TestResult />} />
            <Route path="/info" element={<LogIn />} />
            <Route path="/mypage" element={<LogIn />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addposts" element={<AddPosts userObj={userObj} />} />
          </>
        )}
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </>
  )
}
export default MainRouter