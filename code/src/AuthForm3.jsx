/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import "./App.css";



const AuthForm = () => {

    const [user , setUser] = useState(
      {  
        Name: "", 
        Email:"" ,
        Password: ""
      }
    )

  
      let name,value
      const data = (e) => {
          {
            name = e.target.name,
            value= e.target.value;
            setUser({...user, [name]: value})
          }
          

      }

      const navigate = useNavigate(); 
      const getData = (e) => { 
        const {Name,Email,Password} = user
        e.preventDefault()

        const options ={
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            Name, Email, Password
          })
        }

        const res = fetch(
          'https://noteworthy-cabd3-default-rtdb.firebaseio.com/UserData.json',
          options
          )
          console.log(res)
          if (res)
          {
            navigate('/home')
            alert("Message sent")
          }
          else
          {
            alert("Error Occured")
          }
      
      
      
        }
    
  

    





      

      
    


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
      <form className="login-form"  method="POST" >
        <div className="form-group">
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            name="Name"
            value={user.Name}
            onChange={data}
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
            value={user.Email}
            onChange={data}
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
            value={user.Password}
            onChange={data}
            placeholder="Enter password"
            required
          />
          </div>
        <button type="submit" className="submit-button" onClick={getData}>
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
