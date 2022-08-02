import { Link } from "react-router-dom";
import "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, user, logout }) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="menu">
      <ul>
        <li
          style={{
            width: "30%",
            textAlign: "center",
            fontFamily: "Open Sans",
            fontSize: "30px",
            fontStyle: "italic",
          }}
        >
          <div>Rent a Bike</div>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Features</Link>
        </li>
        <li>
          <Link to="/">Rental</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {!isAuthenticated ? (
          <>
            <li>
              <p>Please login or register</p>
            </li>
            <li>
              <Link style={btnlink} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link style={btnlink} to="/register">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <p>Welcome {user.username}!</p>
            </li>
            <li>
              <button
                style={btnlink}
                type="button"
                onClick={() => logoutHandler()}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

var btnlink = {
  color: "#1997f0",
  backgroundColor: "black",
  fontSize: "large",
  textAlign: "center",
  borderRadius: "10px",
  /* padding: 6px;
   */
};

export default Navbar;
