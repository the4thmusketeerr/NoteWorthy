/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm.jsx"; // Updated import
import HomePage from "./HomePage.jsx";
import CreatePage from "./CreatePage.jsx";
import ViewPage from "./ViewPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
 

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/view" element={<ViewPage />} />
      </Routes>
      </BrowserRouter>
  );





}

export default App;
