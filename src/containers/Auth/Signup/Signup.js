import React, { useState } from "react";
import { toast } from "react-toastify";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import fbService from "api/fbService";

import ErrorMessage from "components/ErrorMessage/ErrorMessage";

import "./Signup.scss";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [credentials, setCridentials] = useState({
    email: "",
    password: ""
  })
  const [errorState, setErrorState] = useState({
    emailError: "",
    passwordError: ""
  })

  const changeHandler = (name, value) => {
    setErrorState ({
      emailError: "",
      passwordError: ""
    })
    setCridentials({
      ...credentials,
      [name]: value
    })
  }

  const handleSignup = async () => {
    try {
      setLoading(true);
      const user = await fbService.signup(credentials);
      console.log("Sucsess: ", user);
    } catch (err) {
      console.log("Error: ", err);
      // toast.error(`Signup failed: ${err.message}`);
      setErrorState({
        emailError: err.message
      })
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div className="app-auth-signup">
      <Input
        value={credentials.email}
        onChange={(e) => changeHandler("email", e.target.value)}
        placeholder="Enter email"
        className="app-auth-signup_input"
        loading={loading}
      />
      <ErrorMessage text={errorState.emailError}/>
      <Input
        value={credentials.password}
        onChange={(e) => changeHandler("password", e.target.value)}
        placeholder="enter password"
        className="app-auth-signup_input"
        loading={loading}

      />
      <ErrorMessage text={errorState.passwordError}/>

      <Button
        variant="contained"
        color="primary"
        title="SIGNUP"
        onClick={handleSignup}
        loading={loading}

      />

    </div>
  )
}

export default Signup;