import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Otp from "./pages/Otp";
import Forgotpassword from "./pages/forgotpassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="otp" element={<Otp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="forgotpassword" element={<Forgotpassword />} />
      </Routes>
    </div>
  );
}

export default App;
