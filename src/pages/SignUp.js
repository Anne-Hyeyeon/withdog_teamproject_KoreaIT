import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../fbase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [region, setRegion] = useState("");

  const navigate = useNavigate()

  const onChange = (event) => {
    const { target: { name, value } } = event
    if (name === 'email') {
      setEmail(value)
    }
    else if (name === 'password') {
      setPassword(value)
    }
    else if (name === 'userName') {
      setUserName(value)
    }
    else if (name === 'region') {
      setRegion(value)
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      try {
        await authService.createUserWithEmailAndPassword(email, password);
        await updateProfile(authService.currentUser,{displayName:userName,
        photoURL:region})
        navigate('/mainloggedin')
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
    <div className="sign-container">
      <div className="sign-up-wrap">
        <h1 className="title">회원가입</h1>
        <form className="sign-up-form" onSubmit={onSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email을 입력하세요."
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="이름을 입력하세요."
              name="userName"
              value={userName}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="주소를 입력하세요."
              name="region"
              value={region}
              onChange={onChange}
            />
          </div>
          <div>
            <button type="submit" >회원가입</button>
          </div>
        </form>
        <hr></hr>
        <p>
          이미 회원이시라면... <Link to="/logIn">로그인</Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default SignUp;