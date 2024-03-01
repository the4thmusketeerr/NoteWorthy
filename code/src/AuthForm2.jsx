/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";




const AuthForm = () => {


  
  

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
      length: "",
      letter: "",
      number: "",
      symbol: "",
      match: ""
    });
  

    


  
    const handleChangePassword = (event) => {
      setPassword(event.target.value);
      validatePassword(event.target.value);
    };
  
    const handleChangeConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const validatePassword = (value) => {
      const errorsCopy = { ...errors };
  
      errorsCopy.length = value.length < 8 ? "Password should be at least 8 characters long." : "";
      errorsCopy.letter = !/[a-zA-Z]/.test(value) ? "Password should contain at least one letter." : "";
      errorsCopy.number = !/\d/.test(value) ? "Password should contain at least one number." : "";
      errorsCopy.symbol = !/[!@#$%^&*]/.test(value) ? "Password should contain at least one symbol." : "";
  
      setErrors(errorsCopy);
    };
  


    const navigate = useNavigate();
    const handleSubmit =  (event) => {
      event.preventDefault();
  
      //Check if passwords match
      if (password !== confirmPassword) {
        setErrors({ ...errors, match: "Passwords do not match." });
        return;
      }

      
  
      // Redirect to home after successful registration
      navigate('/home')
};


      

      
    


  const [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }




  
  if (authMode === "signin") {
  return (//Signin Form
    <div className="container">
      <div className="right-section">
        <h2 className="signTitle">Let's get you back in</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="label-name">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label-name">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group d-flex justify-content-between align-items-center">
            <a href="#" className="forgot-password">Forgot Your Password?</a>
          </div>
          <button type="submit" className="submit-button">
            Sign In
          </button>
          <p className="reroute" onClick={changeAuthMode} >
            Don't have an account? <a href="#">Sign Up</a>
          </p>

          <div className="google-sign">or</div>
          <button type="button" className="submit-google">
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  );
  } else{
  return( //SignUp Form
    <div className="signup-container">
    <div className="right-section">
      <h2 className="signTitle">Welcome to NoteWorthy</h2>
      <form className="login-form"  >
        <div className="form-group">
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Enter password"
            value={password}
            onChange={handleChangePassword}
          />
            <p className="error-message">{errors.length}</p>
            <p className="error-message">{errors.letter}</p>
            <p className="error-message">{errors.number}</p>
            <p className="error-message">{errors.symbol}</p>
          </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
          <p className="error-message">{errors.match}</p>
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Sign Up
        </button>

        <p className="reroute" onClick={changeAuthMode} >
            Already have an account? <a href="#">Sign In</a>
        </p>

        <div className="google-sign">or</div>
        <button type="button" className="submit-google" >
            Sign Up with Google
        </button>

      </form>
      </div>
    </div>
  )
}


}






export default AuthForm;
