import React, { useEffect, useState } from 'react';
import { authService, dbService } from '../../../fbase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import KakaoMapScript from './KakaoMapScript';

const { kakao } = window;

const Info = ({refreshUser, userObj}) => {
  /* 사용자 정보 가져오기 */
  const [user] = useAuthState(authService);
  const navigate = useNavigate();
  const [Place, setPlace] = useState("");
  const [newDisplayName, setNewDisplayName]=useState(userObj.displayName);
  const [newRegion, setNewRegion]=useState(userObj.photoURL);
  const onLogOutClick=()=>{
    authService.signOut();
    navigate('/');
  }

  const onChangeName=(event)=>{
    const {target:{value}}=event;
    setNewDisplayName(value);
  }
  const onChangeRegion=(event)=>{
    const {target:{value}}=event;
    setNewRegion(value);
  }

  const onSubmit= async(event)=>{
    event.preventDefault();
    if(userObj.displayName !== newDisplayName || userObj.photoURL !== newRegion){
      await userObj.updateProfile({
        displayName: newDisplayName,
        photoURL:newRegion
      })
      refreshUser()
    }
    setPlace(user.photoURL);
  }
  useEffect(() => {
    KakaoMapScript();
  }, []);

  console.log(user);


  return (
    <>
      <h1>Hello</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Display Name" value={newDisplayName} onChange={onChangeName}/>
        <input type="text" placeholder="Region Name" value={newRegion} onChange={onChangeRegion}/>
        <input type="submit" value='Update Profile' />
      </form>
      <h1>{user.displayName}</h1>
      <h1>{user.photoURL}</h1>
      {/* <form className="inputForm" onSubmit={onSubmit}>
        <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
        <button type="submit">검색</button>
      </form> */}
      <div id='myMap' style={{
        width: '500px',
        height: '500px'
      }}></div>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
}

export default Info;

