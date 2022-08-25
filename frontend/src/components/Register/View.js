import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import "./Register.css";

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
    <div className="body-div">
      <div className="container-register">
        <div className="text">
          <h3>Create your Account!</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ullam?
          </p>
        </div>
        <form>
          <div className="row-50">
            <label className="label-50" for="firstname">
              First name
            </label>
            <label className="label-50" for="lastname">
              Last name
            </label>
          </div>
          <div className="row-50">
            <input
              className="input-50"
              type="text"
              placeholder="Enter your first name"
              id="email"
              name="email"
            />
            <input
              className="input-50 lastname"
              type="text"
              placeholder="Enter your last name"
              id="surname"
              name="surname"
            />
          </div>
          <div className="row">
            <label for="email">Email</label>
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              name="email"
            />
          </div>
          <div className="row">
            <label className="label-50" for="password">
              Password
            </label>
            <label className="label-50" for="password">
              Confirm Password
            </label>
          </div>
          <div className="row">
            <input
              className="input-50"
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
            />
            <input
              className="input-50"
              type="password2"
              placeholder="Confirm password"
              id="password2"
              name="password2"
            />
          </div>
          <div className="row">
            <label for="location">Location</label>
          </div>
          <div className="row">
            <select type="text" id="location" name="location">
              <option value="sar">Sarajevo</option>
              <option value="mos">Mostar</option>
              <option value="tz">Tuzla</option>
              <option value="bl">Banja Luka</option>
              <option value="zen">Zenica</option>
            </select>
          </div>
          <div className="row">
            <input type="submit" value="SIGN UP" />
          </div>
          <div className="row">
            <Link to="/login">
              <p>LOG IN</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
    /*
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
    */
  );
};

export default Register;
