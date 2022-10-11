import React, { useEffect, useState } from "react";
import "./Checkbox.css";

import { AiOutlineClose } from "react-icons/ai";

function CheckBox({}) {
  const [commentField, setCommentField] = useState("");

  const commentHandler = (e) => {
    e.preventDefault();
    setCommentField(e.target.value);
  };
  return (
    <div className="comment-container">
      <div className="rw">
        <input type="checkbox" />
        <p>
          I may be contacted about this feedback. <span>Privacy Policy</span>
        </p>
      </div>
      <div className="rw">
        <input type="checkbox" />
        <p>
          I’d like to help improve by joining the <span>Reasearch Group</span>
        </p>
      </div>
    </div>
  );
}
export default CheckBox;
