import React, { useState } from "react";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

import "./Auth.scss";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const togleView = () => {
    setIsLogin(!isLogin);
  }
  return (
    <div className="app-auth">
      <h1>{isLogin ? "LOGIN" : "SIGNUP" }</h1>
      {isLogin ? (
        <Login />
      ) : <Signup /> }
      <button onClick={togleView}>  {isLogin ? "Go to Signup" : "Go to Login"}</button>
    </div>
  )
}

export default Auth;