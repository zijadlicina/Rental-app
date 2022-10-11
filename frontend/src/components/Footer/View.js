import "./Footer.css";
import { Link } from "react-router-dom";
import logoImage from "../../images/50f9f8de42454aa1acfdccb9be5e1a34.png";

const Footer = () => {
  return (
    <div className="div-footer">
      <div className="footer">
        <div className="contact">
          <h2>Contact Us</h2>
          <p>Send us message</p>
          <form action="">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="subject" />
            <textarea placeholder="message" />
            <button>Submit</button>
          </form>
        </div>
        <div className="sitemap">
          <h2>Sitemap</h2>
          <p>All our pages</p>
          <ul>
            <li>Home</li>
            <li>Rental</li>
            <li>Login</li>
            <li>Register</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="info">
          <ul>
            <img src={logoImage} alt="logo_page" />
            <li>sarajevorental</li>
            <li>033-123/123</li>
            <li>sarajevorental@gmail.com</li>
            <li>Sarajevo, B&H</li>
            <li>
              <a
                href="https://www.flaticon.com/free-icons/photo"
                title="photo icons"
              >
                Photo icons created by Smashicons - Flaticon
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrights">
        <p>Internsip 2022 - Copyright All rights reserved to AntColony</p>
      </div>
    </div>
  );
};

export default Footer;
