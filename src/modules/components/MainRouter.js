import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "../../pages/Home"
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


const MainRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  console.log(isLoggedIn)
  return (
    <>
      {isLoggedIn && <Home userObj={userObj} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<MainLoggedIn userObj={userObj} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/test" element={<Test />} />
            <Route path="/testhome" element={<TestHome />} />
            <Route path="/testquestion" element={<TestQuestion />} />
            <Route path="/testresult" element={<TestResult />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/test" element={<Test />} />
            <Route path="/testhome" element={<TestHome />} />
            <Route path="/testquestion" element={<TestQuestion />} />
            <Route path="/testresult" element={<TestResult />} />
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
