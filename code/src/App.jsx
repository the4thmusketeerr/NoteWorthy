/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import AuthForm from "./AuthForm.jsx"; 
import HomePage from "./HomePage.jsx";
import ForgotPassword from "./ForgotPassword.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./config/Firebase"; // Import your authentication module
 

// Define a PrivateRoute function
const PrivateRoute = ({ element }) => {
  // Check if user is authenticated
  const isAuthenticated = auth.currentUser !== null;

  return isAuthenticated ? element : <Navigate to="/" />;
};
 function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
      </Routes>
      </BrowserRouter>
  );





}

export default App;
