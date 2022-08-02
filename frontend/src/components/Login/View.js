import React, { useEffect, useState } from "react";
import "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

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
  };

  return (
    <div>
      <form className="form-login" onSubmit={loginHandler}>
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
  );
};

export default Login;
