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
import DogIcons from "./DogIcons";
import PostsOnClick from "../views/hy/PostsOnClick";

const MainRouter = ({ refreshUser, isLoggedIn, userObj }) => {

  return (
      <Routes>
            <Route path="/" element={<Main userObj={userObj} />} />
            <Route path="/blog" element={<Blog userObj={userObj} />} />
            <Route path="/test" element={<Test />} />
            <Route path="/testhome" element={<TestHome />} />
            <Route path="/testquestion" element={<TestQuestion />} />
            <Route path="/testresult" element={<TestResult />} />
            <Route path="info" element={<Info userObj={userObj} refreshUser={refreshUser} />} />
            <Route path="mypage" element={<Mypage userObj={userObj} refreshUser={refreshUser} />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addposts" element={<AddPosts userObj={userObj} />} />
            <Route path="/dog" element={<DogIcons />} />
            <Route path="/posts/:id" element={<PostsOnClick userObj={userObj} />} />
      </Routes>
  )
}
export default MainRouter