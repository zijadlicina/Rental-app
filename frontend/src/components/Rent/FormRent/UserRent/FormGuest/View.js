import React, { useState } from 'react'
import "./FormGuest.css";
import {useNavigate} from "react-router-dom"

function View() {
  const navigate = useNavigate()
  const [userGuest, setUserGuest] = useState({
    name: "",
    surname: "",
    contact: "",
    location: ""
  })
  return (
    <div className="column-guest">
      <div className="btns">
        <p>Don't have an account yet?</p>
        <button
          type="button"
          className="next"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button
          type="button"
          className="next"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
      <p>or continue as guest</p>
      <div className="guest-form">
        <div className="input-div">
          <label>Name</label>
          <input type="text"></input>
        </div>
        <div className="input-div">
          <label>Surname</label>
          <input type="text"></input>
        </div>
        <div className="input-div">
          <label>Contact</label>
          <input type="text"></input>
        </div>
        <div className="input-div">
          <label htmlFor="guest-location">Location</label>
          <input name="guest-location" id="guest-location" type="text"></input>
        </div>
        <div className="nextbtn">
          <button type='button'>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default View