
import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";




const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    login: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      const res = await axios.post("/", inputs);
      navigate("/login");
      console.log(res);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="header5">
      <div className="container">
        <div className="header-line">
          <div className="header-logo">
            <Link to="/"> <img src="images/logo-50.png"/></Link>
          </div>
          <div className="nav">
            <div>
            <Link to="/" className='nav-item'>ГОЛОВНА</Link>
            <Link to="/City"className="nav-item">МІСТА</Link>
            </div>
          </div>
        </div>
      </div>
      
      <section className="log">
        <div className="form-box">
          <div className="form-value">
            <form id="registration-form" onSubmit={handleSubmit}>
              <a className="text-log">
                <h2>Реестрція</h2>
              </a>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  required
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                  // value={inputs.email}
                />
                <label htmlFor=" ">E-Mail</label>
              </div>
              <div className="inputbox">
                <ion-icon name="person-outline"></ion-icon>
                <input
                  required
                  type="text"
                  placeholder="login"
                  name="login"
                  onChange={handleChange}
                  // value={inputs.login}
                />
                <label htmlFor=" ">Username</label>
              </div>
              <div className="inputbox">
                <ion-icon name="bag-outline"></ion-icon>
                <input
                  required
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                  // value={inputs.password}
                />
                <label htmlFor=" ">Password</label>
              </div>
              <button onClick={handleSubmit}  type="submit" className="button-log">
                Зарееструватися
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;