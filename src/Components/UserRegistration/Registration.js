import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(e);

    const regDetails = {
      name: name,
      email: email,
      password: password,
      city: city,
      age: age,
    };
    console.log("56", regDetails);
    if (name === "") {
      setError("Username feild is required");
    } else if (!email.includes("@")) {
      setError("email feild is required");
    } else if (password === "") {
      setError("password feild is required");
    } else if (password.length < 5) {
      setError("password length greater 5");
    } else if (city === "") {
      setError("city feild is required");
    } else if (age === "") {
      setError("age feild is required");
    } else {
      setError("");
      localStorage.setItem("data", JSON.stringify(regDetails));
      navigate("/login");
    }
  };

  return (
    <div>
      <div>
        <h1>User Registration</h1>
      </div>
      {error.length > 0 && <p data-testid="error">{error}</p>}
      <form>
        <label className="label">UserName</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="username"
        />
        <label className="label">Email</label>
        <input
          className="input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="email"
        />
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password"
        />
        <label className="label">City</label>
        <input
          className="input"
          type="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          data-testid="city"
        />
        <label className="label">Age</label>
        <input
          className="input"
          type="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          data-testid="age"
        />
        <button className="btn" onClick={(e) => handleAdd(e)}>
          submit
        </button>
      </form>
    </div>
  );
}
