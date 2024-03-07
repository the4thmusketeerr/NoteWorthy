/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import "./AuthForm.css";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database"; 
import {auth} from '../src/config/Firebase'



const AuthForm = () => {

    

    
  const[name , setName]= useState("")
  const[email , setEmail]= useState("")
  const[password , setPassword]= useState("")


  const db = getDatabase();
     
  



  const navigate = useNavigate()
  const handleSignup = () => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log(email, password); // Logging input values for debugging

    // Create user account with email and password
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Log success message
            console.log("User account created successfully:", userCredential.user.uid);
            navigate('/home')
            // You can perform additional actions here if needed

            // Return userCredential to handle success in the calling code if needed
            return userCredential;
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error creating user account:", errorMessage);
            // You can display error messages to the user or handle them in other ways
            throw error; // Re-throw the error to handle it in the calling code if needed
        });
}


const handleLogin = (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  console.log(email, password); // Logging input values for debugging

  // Sign in with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User logged in successfully:", user.uid);
      navigate("/home");
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorMessage);
      // You can display error messages to the user or handle them in other ways
    });
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
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group" >
            <label htmlFor="email" className="label-name" value={email} >Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label-name" value={password}>Password</label>
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
      <form className="login-form" onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            name="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
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
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="Password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          </div>
        <button type="submit" className="submit-button" >
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
