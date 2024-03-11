/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { auth } from "../src/config/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import "./ForgotPassword.css"

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState(null);

  const handlePasswordReset = (event) => {
    event.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetSuccess(true);
        console.log(email + " reset password sent!");
      })
      .catch((error) => {
        setResetError(error.message);
      });
  };

  return (
    <div className="reset-container">
      <div className="reset-section">
        <h2 className="resetTitle">Password Reset</h2>
        {resetSuccess ? (
          <p>Password reset email sent. Please check your email.</p>
        ) : (
          <form onSubmit={handlePasswordReset}>
            <div className="reset-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
            {resetError && <p className="error-message">{resetError}</p>}
            <button type="submit" className="resetButton">Get Reset Link</button>
            <p className="loginRedirect">Never mind! <a href="/">Take me back to the login page</a></p>
          </form>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
