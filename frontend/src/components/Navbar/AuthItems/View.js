import { Link } from "react-router-dom";
import "../Navbar.css";
import { useNavigate } from "react-router-dom";
import userIcon from "../../../images/user-solid.svg";

import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineBell} from "react-icons/ai";
import {CgMenu} from "react-icons/cg";
import {MdOutlineExpandMore} from "react-icons/md";
import DropDown from "../DropDown";

let utils = require("../../../utils")

const AuthItems = ({ showResMenu, setShowResMenu, rentsRef, user, messages, messagesCount, setMessageDrop, messageDrop, setRefreshNavbar,countUnSeen, setMessagesCount, setMoreDrop, moreDrop}) => {
  return (
        <nav className="div-items2 more" style={{position: "relative"}}>
          <li style={{position: "relative"}} >
            {messagesCount === 0 ? null : 
            <div className="messages">{messagesCount}</div> }
            <AiOutlineBell className={"icon bellicon"} onClick={() => {setMessageDrop(!messageDrop); setMoreDrop(false); setShowResMenu(false)}} />
              {messageDrop ? <DropDown 
              setRefreshNavbar={setRefreshNavbar}
              countUnSeen={countUnSeen}
              messages={messages}
              rentsRef={rentsRef}
              setMessageDrop={setMessageDrop}
              options={utils.messagesOptions} messagesCount={messagesCount} setMessagesCount={setMessagesCount} dropDown={messageDrop} setDropDown={setMessageDrop}/> : null}
          </li>
          <li className={"username"}>
            <span>{user.username}</span>
          </li>
          <li>
            <img className="icon-profile" src={user.image} />
          </li>
          <li><MdOutlineExpandMore className="icon" onClick={() => {setMoreDrop(!moreDrop); setMessageDrop(false); setShowResMenu(false)}}/></li>
          {moreDrop ? <DropDown 
          setRefreshNavbar={setRefreshNavbar}
          moreDrop={moreDrop}
          setDropDown={setMoreDrop}
          options={utils.moreOptions}/> : null}
        </nav> 
  );
};

export default AuthItems;
