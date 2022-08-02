import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Register.module.css";

const Register = ({ registerUser, error, isAuthenticated, userState }) => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [errMsg, setErrMsg] = useState(false);

  useEffect(() => {
    if (error) {
      setErrMsg(true)
    }
    if (isAuthenticated){
      navigate("/" + userState.username);
    }
  }, [isAuthenticated, error]);

  const navigate = useNavigate();
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setErrMsg(false);
    setUser({ ...user, [name]: value });
  };
  const registerHandler = (e) => {
    e.preventDefault();
    registerUser(user, navigate);
  };
  return (
    <div>
      <form className="form-login" onSubmit={registerHandler}>
        {errMsg ? <p>{error} </p>: null}
        <h4>Register to Continue</h4>
        <div className="input-div">
          <label>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={changeHandler}
          />
        </div>
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
        <div className="input-div">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
