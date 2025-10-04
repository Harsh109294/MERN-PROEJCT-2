import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      alert(res.data.message);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Error logging in");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
