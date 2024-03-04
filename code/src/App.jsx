/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm.jsx"; 
import HomePage from "./HomePage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
 

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
  );





}

export default App;
