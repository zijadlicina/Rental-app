import React, { useEffect, useState } from "react";
import "./DropDown.css";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment"

const DropDown = ({message, options, setMessageDrop, rentsRef, users, user, countUnSeen,  setRefreshNavbar, setMessagesCount, messages, messagesInbox, updateMessage, logout, setMoreDrop, moreDrop, dropDown, setDropDown, setMoreDropVisible, moreDropVisible}) => {
  const navigate = useNavigate()
    const logoutHandler = () => {
        logout();
        setDropDown(false)
        navigate("/login");
      };
      
  const messageHandler = (id, type) => {
    let status = {
      status: type
    }
    updateMessage(id, status, setRefreshNavbar)
  }

    const executeScroll = (rentsRef, rental, msg, type) => {
      messageHandler(msg._id, type)
      if (msg.type === "RENTAL_REJECT") {
        navigate(`/rents?user=${user._id}&status=rejected`, {state: {_id: rental.toString()}})
      }
      else {
        navigate(`/rents?user=${user._id}&status=all`, {state: {_id: rental.toString()}})
      }
      setMessageDrop(false)
    }
    const markMessages = () => {
      messages.map((msg) => {
        if (msg.user === user._id && !msg.seen) messageHandler(msg._id, "seen")
        else if (msg.userTo === user._id && !msg.seenUserTo) messageHandler(msg._id, "seenUserTo")
      })
      setMessageDrop(false)
    }
  
  /*      <div className={!moreDropVisible ? "nav-drop dropInvisible" : "nav-drop dropVisible"}>
*/ 
    return (
      <div className={dropDown ? "nav-drop dropInvisible" : "nav-drop dropVisible"}>
        {options.map((option) => {
          if (option.value) {
            return <h2 onClick={() => markMessages()}>Mark all as read</h2>
          } else if (option.name === "log out"){
            return <h3>Controls</h3>
          }
        })}
        <ul>
        {options.map((option) => {
          if (option.value) {
           return <>
              {countUnSeen === messages.length ? 
              <li className="message">
                No Messages
              </li> : messages.map((msg) => {
                if (msg.user === user._id && !msg.seen)
                return <li className="message" onClick={() => 
                { executeScroll(rentsRef, msg.rental, msg, "seen")}}>
                  <div className="row">
                    <img src={getUserById(users, msg.userTo).image} />
                    {msg.text}
                  </div>
                  <div className="row2">
                    <span>{moment(msg.createdAt).fromNow()}</span>
                    <div className={msg.type === "RENTAL_REQ" ? "inactive type" 
                    : msg.type === "RENTAL_APPROVE" ? "approve type"
                    : msg.type === "RENTAL_COMPLETE" ? "complete type" 
                    : msg.type === "FEEDBACK" ? "feedback type"
                    : msg.type === "RENTAL_REJECT" ? "reject type" : null}></div>
                  </div>
                </li>
                else if (msg.userTo === user._id && !msg.seenUserTo){
                  return <li className="message" onClick={() => 
                  { executeScroll(rentsRef, msg.rental, msg, "seenUserTo")}}>
                  <div className="row">
                    <img src={getUserById(users, msg.user).image} />
                    {msg.textToUser}
                  </div>
                  <div className="row2">
                    <span>{moment(msg.createdAt).fromNow()}</span>
                    <div className={msg.type === "RENTAL_REQ" ? "inactive type" 
                    : msg.type === "RENTAL_APPROVE" ? "approve type"
                    : msg.type === "RENTAL_COMPLETE" ? "complete type"
                    : msg.type === "FEEDBACK" ? "feedback type"
                    : msg.type === "RENTAL_REJECT" ? "reject type" : null}></div>
                  </div>                
                 </li>
                }
              })}         
              </>
          }
          else if (option.name === "log out") return <li onClick={logoutHandler}>{option.name}</li>
            return <li className="more">{option.name}</li>
        })}
        </ul>
      </div>
    );
  }
const getUserById = (users, id) => {
  return users.find((x) => x._id === id);
};

export default DropDown;
