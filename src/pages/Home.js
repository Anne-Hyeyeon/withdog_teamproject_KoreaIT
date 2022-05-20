import React, { useEffect, useState } from "react";
import { authService, dbService } from "../fbase";
import { useNavigate } from "react-router";

function Home(){
  const navigate = useNavigate()
  const onLogOutClick = () => {
    authService.signOut()
    navigate('/')
  }
  return(
    <div>
      <h1>Hello</h1>
      <button onClick={onLogOutClick}>Log out</button>
    </div>
  )
}

export default Home;