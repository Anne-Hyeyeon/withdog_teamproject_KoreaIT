import React from "react";
import { Routes, Route } from 'react-router-dom';
import SignUp from "../src/modules/views/Auth/SignUp";
import LogIn from "../src/modules/views/Auth/LogIn";
import Blog from "../src/modules/views/pages/blog/Blog";
import Test from "../src/modules/views/pages/test/Test";
import TestQuestion from "../src/modules/views/pages/test/TestQuestion";
import TestResult from "../src/modules/views/pages/test/TestResult";
import TestHome from "../src/modules/views/pages/test/TestHome";
import Main from "../src/modules/views/pages/main/Main"
import Info from "../src/modules/views/pages/info/Info";
import Mypage from "../src/modules/views/Auth/Mypage";
import AddPosts from "../src/modules/views/pages/blog/AddPosts";
import PostsOnClick from "../src/modules/views/pages/blog/PostsOnClick";

const MainRouter = ({ refreshUser, userObj }) => {

  return (
      <Routes>
            <Route path="/" element={<Main userObj={userObj} />} />
            <Route path="/blog" element={<Blog userObj={userObj} />} />
            <Route path="/test" element={<Test />} />
            <Route path="/testhome" element={<TestHome />} />
            <Route path="/testquestion" element={<TestQuestion />} />
            <Route path="/testresult" element={<TestResult />} />
            <Route path="/info" element={
            userObj ? <Info userObj={userObj} refreshUser={refreshUser} /> : <LogIn />} />
            <Route path="/mypage" element={userObj ? <Mypage userObj={userObj} refreshUser={refreshUser} /> : <LogIn />} />ㅞ
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addposts" element={<AddPosts userObj={userObj} />} />
            <Route path="/posts/:id" element={<PostsOnClick userObj={userObj} />} />
      </Routes>
  )
}
export default MainRouter