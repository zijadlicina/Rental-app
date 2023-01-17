import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logoImage from "../../images/637b0fd82e0b41f5a94674700ed1304c.png";
import logoImage2 from "../../images/50f9f8de42454aa1acfdccb9be5e1a34.png";

import userIcon from "../../images/user-solid.svg";

import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineBell, AiOutlineClose} from "react-icons/ai";
import {CgMenu} from "react-icons/cg";
import {MdOutlineExpandMore} from "react-icons/md";
import DropDown from "./DropDown";
import AuthItems from "./AuthItems";

let utils = require("../../utils")

const Navbar = ({ rentsRef, isAuthenticated, user, fetchUsers, currentTab, changeCurrentTab, authorization, fetchMessages, message, messages, bike, rentals}) => {
  const [isShow, setShowNav] = useState(false);
  const [activeTab, setActiveTab] = useState(0)
  const [dropDownUser, setDropDownUser] = useState(false)
  
  const {isAdmin, isUser, isGuest, isAgency} = authorization;
  
  const navigate = useNavigate();

  const navbarShow = () => {
    setShowNav(!isShow);
  };

  const tabHandler = (name) => {
    //setActiveTab(id)
    changeCurrentTab(name)
    executeScroll()
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const executeScroll = () => {
    window.scrollTo({
      top: 0,
    })
  }
  const [messagesCount, setMessagesCount] = useState(message.unSeen + message.unSeenToUser)
  const [countUnSeen, setCountUnSeen] = useState(0)

  const [refreshNavbar, setRefreshNavbar] = useState(0)
    useEffect(() => {
      if (!isGuest){
        fetchMessages(user._id)
      }
      setMessagesCount(0)
    }, [authorization, refreshNavbar, bike, rentals])


    useEffect(() => {
      if (!isGuest){
      let count = 0;
      let unSeen = 0;
      messages.map((item, i) => {
        if (user._id === item.user){
          if (!item.seen) count++;
          else unSeen++;
        } else {
          if (!item.seenUserTo) count++;
          else unSeen++;
        }
        if (i === messages.length - 1){
          setMessagesCount(count)
          setCountUnSeen(unSeen)
        }
      })
      }
    })

  //---------- more dropdown
  const [moreDrop, setMoreDrop] = useState(false)
  const [messageDrop, setMessageDrop] = useState(false)
  const [moreDropVisible, setMoreDropVisible] = useState(false)

  const [showResMenu, setShowResMenu] = useState(false)

  const disableResMenu = () => {
    setShowResMenu(false)
  }
  return (
    <div className="header-div">
      <div className="menu-div1">
          <nav className="div-items">
          {utils.menuItems.map((item, id) => {
            if (item.name === "menu-icon"){
              return <div className="icon-menu">
                {!showResMenu ? <CgMenu className="cgmenu" onClick={() => {setShowResMenu(!showResMenu); setMoreDrop(false); setMessageDrop(false);}} />
                : showResMenu ? <AiOutlineClose className="cgmenu" onClick={() => setShowResMenu(!showResMenu)} /> : null
                }
                {isAuthenticated ? 
                  <AuthItems showResMenu={showResMenu} setShowResMenu={setShowResMenu} rentsRef={rentsRef} user={user} messages={messages} 
                  messagesCount={messagesCount} setMessageDrop={setMessageDrop} messageDrop={messageDrop}
                  setRefreshNavbar={setRefreshNavbar} countUnSeen={countUnSeen} setMessagesCount={setMessagesCount} setMoreDrop={setMoreDrop} moreDrop={moreDrop}/> : null}
              </div>
            }
            if (!item.auth || item.auth && (isAgency || isUser)) 
            return <li className={!showResMenu && currentTab === item.name ? "li-display active" : !showResMenu ? "li-display" : currentTab === item.name ? "active" : null} 
            onClick={() => tabHandler(item.name)}>
              <Link onClick={disableResMenu} to={item.to}>{item.name}</Link>
            </li>
          })}
        </nav> 
        {isAuthenticated ? 
        <AuthItems rentsRef={rentsRef} user={user} messages={messages} showResMenu={showResMenu}
        messagesCount={messagesCount} setMessageDrop={setMessageDrop} messageDrop={messageDrop}
        setRefreshNavbar={setRefreshNavbar} countUnSeen={countUnSeen} setMessagesCount={setMessagesCount} setMoreDrop={setMoreDrop} moreDrop={moreDrop}/> : 
        <nav className="div-items2">
          {utils.menuItemsRight.map((item, id) => {
            if (item.to === "/register") {
              return <li className={!showResMenu && currentTab === item.name ? "li-display active" : !showResMenu ? "li-display registerBtn" : "registerBtn"}
              onClick={() => tabHandler(item.name)}>
                <Link onClick={disableResMenu} to={item.to}>{item.name}</Link>
              </li>
            }
            return <li
            className={!showResMenu && currentTab === item.name ? "li-display active" : !showResMenu ? "li-display" : null}
            onClick={() => tabHandler(item.name)}>
              <Link onClick={disableResMenu} to={item.to}>{item.name}</Link>
            </li>
          })}
        </nav> }
      </div> 
    </div>
  );
};

export default Navbar;
