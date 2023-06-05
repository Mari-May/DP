
import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);



  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      const res = await axios.post("/login", inputs);
      navigate("/");
      console.log(res);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='header4' >
        <div className='container'>
            <div className='header-line'>

                <div className='header-logo'>
                  <Link to="/"> <img src="images/logo-50.png"/></Link>
                </div>

                <div className="nav">
                <div>
            <Link to="/" className="nav-item">ГОЛОВНА</Link>
            <Link to="/City" className="nav-item">МІСТА</Link>
            </div>
          </div>

                </div> 
                </div>
        <section className="log">
            <div className="form-box">
                <div className="form-value">
                    <form action="">
                        <a className="text-log"><h2>Вхід</h2></a>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="login" required name="login" onChange={handleChange}/>
                            <label htmlFor="">Login</label> 
                        </div>

                        
                        <div className="inputbox">
                            <ion-icon name="bag-outline"></ion-icon>
                            <input type="password" required name="password" onChange={handleChange}/>
                            <label htmlFor="">Password</label> 
                        </div>
                        <div className="forget">
                            <label htmlFor=""><input type="checkbox"/>Запам'ятати мене</label>
                        </div>
                        <button onClick={handleSubmit}  type="submit" className="button-log">
                            Вхід
                        </button>
                        <div className="register">
                            <p>Не зареестрований <Link to="/register"> Реестрція</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Login;