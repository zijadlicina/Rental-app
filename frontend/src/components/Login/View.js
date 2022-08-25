import React, { useEffect, useState } from "react";
import "./Login.css";
import "antd/dist/antd.css";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Login = ({ userLogin, isAuthenticated, error, userState }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errMsg, setErrMsg] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setErrMsg(true);
    }
    if (isAuthenticated) {
      navigate("/" + userState.username);
    }
  }, [isAuthenticated, error]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setErrMsg(false);
    setUser({ ...user, [name]: value });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    userLogin(user);

    setUser({ email: "", password: "" });
    /*<form className="form-login" onSubmit={loginHandler}>
        {errMsg ? <p className="errorInput">Invalid Credentionals</p> : null}
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
          <Link to="/forgotPassword">Forgot Password?</Link>
        </div>
        <div className="input-div">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    */
  };

  return (
    <div className="body-div">
      <div className="container-login">
        <div className="text">
          <h3>Welcome Back!</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ullam?
          </p>
        </div>
        <form>
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
            <label for="password">Password</label>
          </div>
          <div className="row">
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
            />
          </div>
          <div className="row check">
            <input
              className="checkbox"
              type="checkbox"
              id="checkRemember"
              name="checkRemember"
            />
            <label id="rememberCheck" for="checkRemember">
              Remember Me
            </label>
            <label id="forgotLabel">Forgot Password?</label>
          </div>
          <div className="row">
            <input type="submit" value="LOGIN" />
          </div>
          <div className="row">
            <Link to="/register">
              <p>SIGN UP</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
