import React, { useEffect, useState } from "react";
import "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({ forgotPassword }) => {
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState(false)

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const forgotHandler = (e) => {
    e.preventDefault();
    forgotPassword(email);
    // if (email je ispravan)
    navigate('/resetPassword')
  };

  return (
    <div>
      <form className="form-login" onSubmit={forgotHandler}>
        {errMsg ? <p className="errorInput">Invalid Credentionals</p> : null}
        <h4>Forgot Password </h4>
        <p>Please enter the email which you used during registration:</p>
        <div className="input-div">
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
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

export default ForgotPassword;
