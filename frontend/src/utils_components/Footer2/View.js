import { Link } from "react-router-dom";
import logoImage from "../../images/50f9f8de42454aa1acfdccb9be5e1a34.png";

const Footer2 = () => {
  return (
    <div className="div-footer">
      <div id={"nesto"} className="footer">
        <div className="contact A">
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
        <div className="B">
          B
        </div>
      </div>
      <div className="copyrights">
        <p>Internsip 2022 - Copyright All rights reserved to AntColony</p>
      </div>
    </div>
  );
};

export default Footer2;
