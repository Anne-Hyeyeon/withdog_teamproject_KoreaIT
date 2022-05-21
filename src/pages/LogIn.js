import React, { useState } from "react";
import { authService } from "../fbase";
import { Link, useNavigate } from "react-router-dom";

const Login=() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()


  const onChange = (event)=>{
    const {target:{name, value}} = event
    if(name==='email'){
      setEmail(value)
    }
    else if(name==='password'){
      setPassword(value)
    }
  }

  const onSubmit= async (event)=>{
    event.preventDefault()
    if (email !== "" && password !== "") {
      try {
        await authService.signInWithEmailAndPassword(email,password)
        navigate('/mainloggedin')
      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <div className="sign-container">
      <div className="sign-wrap">
        <h1 className="title">로그인</h1>
        <form className="sign-form" onSubmit={onSubmit}>
          <div>
            <input
              type="email"
              placeholder="이메일을 입력하세요."
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
            <button type="submit">로그인</button>
          </div>
        </form>
        <hr></hr>
        <p>
          회원이 아니시라면... <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;