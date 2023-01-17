import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logoImage from "../../images/637b0fd82e0b41f5a94674700ed1304c.png";
import logoImage2 from "../../images/50f9f8de42454aa1acfdccb9be5e1a34.png";

import userIcon from "../../images/user-solid.svg";

import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {MdOutlineExpandMore} from "react-icons/md";

const Navbar = ({ isAuthenticated, user, logout, authorization}) => {
  const [isShow, setShowNav] = useState(false);
  const [activeTab, setActiveTab] = useState(0)
  const [dropDownUser, setDropDownUser] = useState(false)
  
  const {isAdmin, isUser, isGuest, isAgency} = authorization;
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/home");
    logout();
    setDropDownUser(false)
    setDropStateVisible(false)
  };

  const navbarShow = () => {
    setShowNav(!isShow);
  };

  const [dropStateVisible, setDropStateVisible] = useState(false)
  const delayTimer = () => {
    let timer;
    let x = dropDownUser
    if (!x){
      setDropDownUser(!dropDownUser)
       timer = setTimeout(() => {
        setDropStateVisible(!dropStateVisible)
      }, 1000)
    }
    else {
      setDropStateVisible(!dropStateVisible)
       timer = setTimeout(() => {
        setDropDownUser(!dropDownUser)
      }, 1000)
    }
    return () => clearTimeout(timer)
  }

  return (
    <>
      <div className="header-div">
        <div className="row">
          <div className="logo">
            <a href="/">
              <img src={logoImage2} alt="logo image"></img>
            </a>
          </div>
          <button className="nav-toggle" onClick={navbarShow}>
            <FaBars />
          </button>
        </div>
        <nav className={isShow ? "showNav" : "notShow"} style={{position: "relative"}}>
          <ul>
            <li>
              <Link
                to="/"
                className={activeTab === 0 ? "active" : null}
                onClick={() => {
                  setShowNav(!isShow);
                  setActiveTab(0);
                }}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/rental"
                className={activeTab === 1 ? "active" : null}
                onClick={() => {
                  setShowNav(!isShow);
                  setActiveTab(1);
                }}
              >
                Rental
              </Link>
            </li>
            {isAuthenticated && ( isAdmin || isAgency || isUser) ? <li>
              <Link
                to="/rents"
                className={activeTab === 5 ? "active" : null}
                onClick={() => {
                  setShowNav(!isShow);
                  setActiveTab(5);
                }}
              >
                My Rents
              </Link>
            </li> : null }
            <li>
              <Link
                to="/about"
                className={activeTab === 2 ? "active" : null}
                onClick={() => {
                  setShowNav(!isShow);
                  setActiveTab(2);
                }}
              >
                About
              </Link>
            </li>
            {!isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className={activeTab === 3 ? "active" : null}
                    onClick={() => {
                      setShowNav(!isShow);
                      setActiveTab(3);
                    }}
                  >
                    SIGN IN
                  </Link>
                </li>
                <li>
                  <Link to="/register" className={activeTab === 4 ? "active" : null}
                    onClick={() => {
                      setShowNav(!isShow);
                      setActiveTab(4);
                    }}>
                    SIGN UP
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-div auth image">
                  <div className="profileImage-div" style={{position: "relative"}}>
                  <div></div>
                    <img src={user.image} alt="user_image" 
                  onClick={() => {delayTimer()}}>
                  </img>
                  </div>
                  {dropDownUser ? 
                  <div className={!dropStateVisible ? "dropDownUser dropDownUserInvisible" : "dropDownUser dropDownUserVisible"}>
                    <ul className="drop-ul">
                      <li className="drop-item">
                        <button onClick={logoutHandler}>Log out</button>
                      </li>
                      <li className="drop-item">
                        <button>Setting</button>
                      </li>
                    </ul>
                  </div> : null}
                  {/*{dropDownUser ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight /> */}
              </li>
             {/*dropDownUser && isAuthenticated ? <>
                <li className="text-div auth more">
                  <button onClick={logoutHandler}>Log out</button>
                </li>
                <li className="text-div auth more">
                  <button>Setting</button>
                </li>
            </> : null */}
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
