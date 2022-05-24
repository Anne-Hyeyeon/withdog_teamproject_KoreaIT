import React, { useState } from 'react';
import { authService } from '../../../fbase';
import { useNavigate } from 'react-router-dom';
// import { useAuthState } from "react-firebase-hooks/auth";
import MapContainer from './MapContainer';

const Info = ({ refreshUser, userObj }) => {
  /* 사용자 정보 가져오기 */
  // const [user] = useAuthState(authService);
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [newRegion, setNewRegion] = useState(userObj.photoURL);
  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  }

  const onChangeName = (event) => {
    const { target: { value } } = event;
    setNewDisplayName(value);


  }
  const onChangeRegion = (event) => {
    const { target: { value } } = event;
    setNewRegion(value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName || userObj.photoURL !== newRegion) {
      await userObj.updateProfile({
        displayName: newDisplayName,
        photoURL: newRegion
      })
      refreshUser()
    }
  }
  // console.log(user);

  return (
    <>
      <h1>Hello</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder={userObj.displayName} value={newDisplayName} onChange={onChangeName} />
        <input type="text" placeholder={userObj.photoURL} value={newRegion} onChange={onChangeRegion} />
        <input type="submit" value='Update Profile' />
      </form>
      <MapContainer searchPlace={userObj.photoURL + "공원"} />
      <h1>{userObj.displayName}</h1>
      <h1>{userObj.photoURL}</h1>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
}

export default Info;