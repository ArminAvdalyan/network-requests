import React, { useState } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import "./Login.scss";
import fbService from "api/fbService";

const Login = () => {

  const [credentials, setCridentials] = useState({
    email: "",
    password: ""
  })

  const changeHandler = (name, value) => {
    setCridentials({
      ...credentials,
      [name]: value
    })
  }

  const loginHandler = async () => {
    const user = await fbService.login(credentials);
    console.log(user)
  }

  return (
    <div className="app-auth-login">
      <Input
        value={credentials.email}
        onChange={(e) => changeHandler("email", e.target.value)}
        placeholder="Enter email"
        className="app-auth-login_input"
      />
      <Input
        value={credentials.password}
        onChange={(e) => changeHandler("password", e.target.value)}
        placeholder="Enter password"
        className="app-auth-login_input"
      />
      <Button
        variant="contained"
        color="primary"
        title="LOGIN"
        onClick={loginHandler}
      />
    </div>
  )
}

export default Login;