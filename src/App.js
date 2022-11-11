import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Otp from "./pages/Otp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='otp' element={<Otp />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
