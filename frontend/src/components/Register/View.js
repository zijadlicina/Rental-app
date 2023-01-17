import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import FormBasic from "./FormBasic/FormBasic";
import FormDetail from "./FormDetail/FormDetail";
import "./Register.css";
import { useScrollTo } from "react-use-window-scroll";

const Register = ({ registerUser, error, isAuthenticated, userState }) => {
  const [user, setUser] = useState({ name: "", surname: "", contact: "", username: "", location: "Europe", email: "", password: "", password2: "",image: "", roles: "", providerName: ""});
  let [validationMsg, setValidationMsg] = useState([
    {name: "username", val: false},
    {name: "email", val: false},
    {name: "password", val: false},
    {name: "password2", val: false},
  ])
  
  const [errMsg, setErrMsg] = useState(false);

  const [tabCurrent, setTabCurrent] = useState(0)
  const scrollTo = useScrollTo()
  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [tabCurrent])

  const regexEmail =  /^\S+@\S+\.\S+$/
  const tabHandler = (val) => {
    if (user.username === "" || user.email === "" || user.email === "" || !regexEmail.test(user.email)){
      let temp = [];
        validationMsg.filter((it) => {
          if (it.name === "email" && user.email === "" || it.name === "email" && !regexEmail.test(user.email)) {
            temp.push({name: "email", val: true})
          }
          else if (it.name === "username" && user.username === "") {
            temp.push({name: "username", val: true})
          } 
          else temp.push(it)
        })
      setValidationMsg((prev) => {
        return temp;
      })
    }
    else {
      setValidationMsg([
        {name: "username", val: false},
        {name: "email", val: false},
        {name: "password", val: false},
        {name: "password2", val: false},
      ])
      setTabCurrent(val)
    }
  }

  useEffect(() => {
  }, [validationMsg])

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
  /*  if (name === "roles"){
      let array = [];
      if (value === "user" || value === "both") array.push("2001")
      if (value === "agency" || value === "both") array.push("1994")
      setUser({...user, roles: array})
    } 
    else
    */ 
   
    if (name === "email" || name === "username"){
      let temp = [];
      validationMsg.filter((it) => {
        if (it.name === name ) {
          temp.push({name: name, val: false})
        }
        else temp.push(it)
      })
      setValidationMsg((prev) => {
        return temp;
      })
      setUser({ ...user, [name]: value });
    }
      else {
        setUser({ ...user, [name]: value });
      }
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
        <div className="tabs">
          <div className={tabCurrent === 0 ? "active" : null} onClick={() => tabHandler(0)}>Basic info</div>
          <div className={tabCurrent === 1 ? "active" : null} onClick={() => tabHandler(1)}>Detail info</div>
        </div>
        <form onSubmit={registerHandler}>
          {tabCurrent === 0 ? 
          <FormBasic user={user} validationMsg={validationMsg} changeHandler={changeHandler} tabHandler={tabHandler}/>
          : tabCurrent === 1 ? <FormDetail changeHandler={changeHandler} user={user} setUser={setUser}/>
          : null }
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
