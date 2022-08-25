import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logoImage from "../../images/637b0fd82e0b41f5a94674700ed1304c.png";
import userIcon from "../../images/user-solid.svg";

import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ isAuthenticated, user, logout }) => {
  const [isShow, setShowNav] = useState(false);
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
              <img
                src={logoImage}
                alt="logo image"
              ></img>
            </a>
          </div>
          <button className="nav-toggle" onClick={navbarShow}>
            <FaBars />
          </button>
        </div>
        <nav className={isShow ? "showNav" : "notShow"}>
          <ul>
            <li>
              <Link to="/" onClick={() => setShowNav(!isShow)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setShowNav(!isShow)}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/rental" onClick={() => setShowNav(!isShow)}>
                Rental
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setShowNav(!isShow)}>
                About
              </Link>
            </li>
            {!isAuthenticated ? (
              <>
                <li className="text-div">
                  <span>Please login or register</span>
                </li>
                <li>
                  <Link to="/login" onClick={() => setShowNav(!isShow)}>
                    SING IN
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={() => setShowNav(!isShow)}>
                    SING UP
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    </>

    /*
    <div className="header">
      <nav>
        <ul>
          <li className="logo-item">
            <div>
              <img src={logoImage} alt="logo image"
              ></img>
            </div>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Features</Link>
          </li>
          <li>
            <Link to="/rental">Rental</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!isAuthenticated ? (
          <div className="auth-div">
            <li className="text-div">
              <span>Please login or register</span>
            </li>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                Register
              </Link>
            </li>
          </div>
        ) : null}
        </ul>
      </nav>
    </div>
    */
  );
};

export default Navbar;
