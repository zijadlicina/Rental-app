import { useState } from "react";
import {AiOutlineInfoCircle} from "react-icons/ai"

const FormBasic = ({user, changeHandler, tabHandler, validationMsg}) => {
  const [fieldInfo1, setFieldInfo1] = useState(0)
  const [fieldInfo2, setFieldInfo2] = useState(0)
  const [fieldInfo3, setFieldInfo3] = useState(0)

  const changeFieldsInfo = (id) => {
    if (id === 0) setFieldInfo1(!fieldInfo1);
    if (id === 1) setFieldInfo2(!fieldInfo2);
    if (id === 2) setFieldInfo3(!fieldInfo3);
  };
  return (
    <>
    <div className="row-50">
    <label className="label-50" for="firstname">
              First name 
            </label>
            <label className="label-50 right" for="lastname">
              Last name
            </label>
          </div>
          <div className="row-50">
            <input
              className="input-50"
              type="text"
              placeholder="Enter your name"
              id="name"
              name="name"
              value={user.name}
              onChange={changeHandler}
            />
            <input
              className="input-50 lastname"
              type="text"
              placeholder="Enter your surname"
              id="surname"
              name="surname"
              value={user.surname}
              onChange={changeHandler}
            />
          </div>
          <div className="row">
            <div className="label" style={{ position: "relative" }}>
              <label htmlFor="">Email</label>
              <div className={fieldInfo1 ? "textmsgShow" : "textmsg"}>
                Email address must be in the format: "string@string.com"
              </div>
              <span>
                <AiOutlineInfoCircle
                  className={
                    validationMsg[1].val ? "infoIcon infoIconRed" : "infoIcon"}
                  onMouseEnter={() => changeFieldsInfo(0)}
                  onMouseLeave={() => changeFieldsInfo(0)}
                />
              </span>
            </div>           
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="row">
          <div className="label" style={{ position: "relative" }}>
              <label htmlFor="">Username</label>
              <div className={fieldInfo2 ? "textmsgShow" : "textmsg"}>
                Username must have minimal 5 characters with one number
              </div>
              <span>
                <AiOutlineInfoCircle
                  className={
                    validationMsg[0].val ? "infoIcon infoIconRed" : "infoIcon"}
                  onMouseEnter={() => changeFieldsInfo(1)}
                  onMouseLeave={() => changeFieldsInfo(1)}
                />
              </span>
            </div> 
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
          <div className="row-50">
            <label className="label-50" for="password">
              Password
            </label>
            <div className="label" style={{ position: "relative" }}>
              <label className="label-50 right">Confirm Password</label>
              <div className={fieldInfo3 ? "textmsgShow" : "textmsg"}>
                Password and Confirm Password must be equal
              </div>
              <span>
                <AiOutlineInfoCircle
                  className={
                    validationMsg[1].val ? "infoIcon infoIconRed" : "infoIcon"}
                  onMouseEnter={() => changeFieldsInfo(2)}
                  onMouseLeave={() => changeFieldsInfo(2)}
                />
              </span>
            </div> 
          </div>
          <div className="row">
            <input
              className="input-50"
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              value={user.password}
              onChange={changeHandler}
            />
            <input
              className="input-50"
              type="password"
              placeholder="Confirm password"
              id="password2"
              name="password2"
              value={user.password2}
              onChange={changeHandler}
            />
          </div>
          <div className="row">
            <label className="label-50" for="firstname">
              Location
            </label>
          </div>
          <div className="row">
            <select className="input" type="text" id="location" name="location" onChange={changeHandler}>
              <option value="sar">Sarajevo</option>
              <option value="mos">Mostar</option>
              <option value="tz">Tuzla</option>
              <option value="bl">Banja Luka</option>
              <option value="zen">Zenica</option>
            </select>
          </div>
          <div className="row">
            <button type="button" className="continueBtn" onClick={() => tabHandler(1)}>Continue</button>
          </div>
          </>
  );
};

export default FormBasic;