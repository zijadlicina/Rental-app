import React from "react";
import "./ItemsSlider.css";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";

import ImagesGallery from "./ImagesGallery";

function ItemsSlider() {
  return (
    <div className="items-listSlider">
      
      <div className="input">
        <div className="detail">
         <div className="icons">
         </div>
          <h1>Just for kids</h1>
          <div className="category">
            <span>Bike</span>
            <span>Family</span>
          </div>
          <table>
            <tr className="table">
              <th>UNIT</th>
              <th>PRICE</th>
              <th>RATING</th>
              <th>WEIGHT</th>
            </tr>
            <tr>
              <td>Hour</td>
              <td>$25</td>
              <td style={{ color: "orange" }}>4.25</td>
              <td>13kg</td>
            </tr>
          </table>
          <div className="replies">
            <span>
              2 <IoMdHeartEmpty className="like" />
            </span>
            <span className="dislike">
              2 <AiOutlineDislike />
            </span>
            <span className="comment">
              1 <AiOutlineComment />
            </span>
          </div>
        </div>
      </div>
      <div className="div-images"><ImagesGallery /></div>
      <div className="output" style={{ border: "1px solid blue" }}></div>
    </div>
  );
}

export default ItemsSlider;
