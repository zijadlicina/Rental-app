import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logoImage from "../../images/637b0fd82e0b41f5a94674700ed1304c.png";
import userIcon from "../../images/user-solid.svg";

import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ isAuthenticated, user, logout, authorization }) => {
  const [isShow, setShowNav] = useState(false);
  const [activeTab, setActiveTab] = useState(0)

  const {isAdmin, isUser, isGuest, isAgency} = authorization;
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate("/");
  };

  const navbarShow = () => {
    setShowNav(!isShow);
  };

  return (
    <>
      <div className="header-div">
        <div className="row">
          <div className="logo">
            <a href="/">
              <img src={logoImage} alt="logo image"></img>
            </a>
          </div>
          <button className="nav-toggle" onClick={navbarShow}>
            <FaBars />
          </button>
        </div>
        <nav className={isShow ? "showNav" : "notShow"}>
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
                <li className="text-div">
                  <span>Please login or register</span>
                </li>
                <li>
                  <Link
                    to="/login"
                    className={activeTab === 3 ? "active" : null}
                    onClick={() => {
                      setShowNav(!isShow);
                      setActiveTab(3);
                    }}
                  >
                    SING IN
                  </Link>
                </li>
                <li>
                  <Link to="/register" className={activeTab === 4 ? "active" : null}
                    onClick={() => {
                      setShowNav(!isShow);
                      setActiveTab(4);
                    }}>
                    SING UP
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-div auth">
                  <p>Welcome {user.username}!</p>
                </li>
                <li className="text-div auth">
                  <button onClick={logoutHandler}>LOG OUT</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
