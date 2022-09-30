import React, { useEffect, useState } from "react";
import "./Login.css";
import "antd/dist/antd.css";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import LinearProgress from "@mui/material/LinearProgress";

const Login = ({ userLogin, isAuthenticated, error, userState, loading }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [errMsg, setErrMsg] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setErrMsg(false);
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
    setUser({ username: "", password: "" });
    userLogin(user);
    if (error) {
      setErrMsg("Invalid credentionals");
    }
  };
  if (loading) {
    return (
      <div className="body-div-fixed">
        <div className="container-loading">
          <p>Please wait...</p>
          <LinearProgress />
        </div>
      </div>
    );
  } else {
    return (
      <div className="body-div">
        <div className="container-login">
          <div className="text">
            <h3>Welcome Back!</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
              ullam?
            </p>
          </div>
          <form onSubmit={loginHandler}>
            {errMsg ? (
              <div className="row">
                <p className="error">{errMsg}</p>
              </div>
            ) : null}
            <div className="row">
              <label for="username">username</label>
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Enter your username"
                id="username"
                name="username"
                value={user.username}
                onChange={changeHandler}
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
                onChange={changeHandler}
                value={user.password}
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
  }
};

export default Login;
