import React, { useEffect, useState } from "react";
import "./ResetPassword.module.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ resetPassword }) => {
  const [inputObject, setInputObject] = useState({
    email: '', password: '', confirmPassword: ''
  });
  const [errMsg, setErrMsg] = useState(false);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setErrMsg(false);
    setInputObject({ ...inputObject, [name]: value });;
  };
  const resetHandler = (e) => {
    e.preventDefault();
    resetPassword(inputObject);
  };

  return (
    <div>
      <form className="form-login" onSubmit={resetHandler}>
        {errMsg ? <p className="errorInput">Invalid Credentionals</p> : null}
        <h4>Reset Password </h4>
        <div className="input-div">
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={inputObject.email}
            onChange={changeHandler}
          />
        </div>
        <div className="input-div">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={inputObject.password}
            onChange={changeHandler}
          />
        </div>
        <div className="input-div">
          <label>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={inputObject.confirmPassword}
            onChange={changeHandler}
          />
        </div>
        <div className="input-div">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
