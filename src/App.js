import * as React from 'react';
import withRoot from './modules/withRoot';
import MainRouter from './modules/components/MainRouter';
import {useEffect, useState} from 'react'
import { authService } from './fbase';
import AppAppbar from '../src/modules/views/AppAppBar'
import AppFooter from '../src/modules/views/AppFooter'
import AppAppBarLoggedIn from '../src/modules/views/AppAppBarLoggedIn'

function App() {
  const [init, setInit] = useState(false)
  console.log(init)
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [userObj, setUserObj] =useState(null)
  useEffect(()=>{
    authService.onAuthStateChanged((user)=> {
      if(user){
        setIsLoggedIn(true)
        setUserObj({
          displayName:user.displayName,
          uid:user.uid,
          photoURL:user.photoURL,
          updateProfile:(args)=> user.updateProfile(args)
        });
      } else{
        setIsLoggedIn(false)
      }
      setInit(true);
    })
  }, []);
  const refreshUser=()=>{
    const user=authService.currentUser;
    setUserObj({ // user에서 값을 세분화 시켜서 분리해서 사용
      displayName:user.displayName,
      uid:user.uid,
      photoURL:user.photoURL,
      updateProfile:(args)=> user.updateProfile(args)
    });
    console.log(authService.currentUser)
  }

  return (
    <>
      {isLoggedIn ?
      <>
      <AppAppBarLoggedIn />
      <MainRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj}/>
      <AppFooter />
      </> : 
      <>
      <AppAppbar />
      <MainRouter />
      <AppFooter />
      </>}
    </>
  );
}


export default withRoot(App);
