import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginDetails = JSON.parse(localStorage.getItem("data"));
    console.log("7844", loginDetails);
    if (loginDetails?.name === name && loginDetails?.password === pass) {
      setError("login successfully");
      //navigate("/UserDetailsEditPage");
      navigate("/UserDetailsPage");
    }
  };

  return (
    <>
      <div>
        <h1>LoggedIn User </h1>
      </div>
      {error && <p>{error}</p>}
      <form>
        <label className="label">UserName</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setUser(e.target.value)}
          data-testid="input-field"
        />
        <label className="label">password</label>
        <input
          className="input"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          data-testid="password-field"
        />
        <button className="btn" onClick={(e) => handleLogin(e)}>
          Login
        </button>
      </form>
    </>
  );
}
