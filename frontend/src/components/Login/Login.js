import React, { useState } from "react";
import "./Login.module.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ email: "", password: "" });
  };
  return (
    <div>
      <form className="form-login" onSubmit={loginHandler}>
        <h4>Login to Continue</h4>
        <div className="input-div">
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
        </div>
        <div className="input-div">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={changeHandler}
          />
        </div>
        <div className="input-div-a">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="input-div">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
