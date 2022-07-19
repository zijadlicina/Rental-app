import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux";
import "./Login.module.css";

const Login = ({ userLogin }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
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

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user) => dispatch(loginUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
