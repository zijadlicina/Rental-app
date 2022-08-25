import "./Footer.css";
import { Link } from "react-router-dom";
import logoImage from "../../images/637b0fd82e0b41f5a94674700ed1304c.png";

const Footer = () => {
  return (
    <div className="div-footer">
      <div className="raw">
        <div className="div-contact">
          <article>
            <h2>Contact Us</h2>
            <p>Send us message</p>
            <form>
              <input type="text" placeholder="Name:" id="name" name="name" />
              <input type="text" placeholder="Email:" id="email" name="email" />
              <input
                type="text"
                placeholder="Subject:"
                id="subject"
                name="subject"
              />
              <textarea placeholder="Your message..."/>
              <input type="submit" value="Submit" />
            </form>
          </article>
        </div>
        <div className="div-sitemap">
          <article>
            <h2>Sitemap</h2>
            <p>All our pages</p>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </article>
        </div>
        <div className="div-info">
          <img src={logoImage} ></img>
          <a href="#">sarajevorental</a>
          <a href="#">033-123/123</a>
          <a href="#">sarajevorental@mail.com</a>
          <a href="#">Sarajevo, B&H</a>
        </div>
      </div>
      <div className="raw">
        <div className="div-rights">
          <p>All rights to AntColony - Internship 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
