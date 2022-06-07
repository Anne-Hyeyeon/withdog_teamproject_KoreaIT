import * as React from 'react';
import withRoot from './modules/withRoot';
import MainRouter from './MainRouter'
import { useEffect, useState } from 'react'
import { authService } from './fbase';
import AppAppBar from './modules/views/pages/main/AppAppBar';
import AppFooter from './modules/views/pages/main/AppFooter';
import ScrollButton from './modules/components/ScrollButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState("")
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
          updateProfile: (args) => user.updateProfile(args)
        });
      } else {
        setIsLoggedIn(false)
      }
    })
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({ // user에서 값을 세분화 시켜서 분리해서 사용
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL,
      updateProfile: (args) => user.updateProfile(args)
    });
    console.log(authService.currentUser)
  }
  return (
    <>
      <AppAppBar userObj={userObj} />
      <MainRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj} />
      <AppFooter />
      <ScrollButton />
    </>
  );
}


export default withRoot(App);