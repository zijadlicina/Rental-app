import React from "react";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import { MdSort, MdOutlineFiberNew, MdOutlineLocationOn } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import "../../Rental.css";

import ImagesGallery from "../ItemsSlider/ImagesGallery";

function Item({ view }) {
  return (
    <div className="item">
      <article
        className={view === 2 ? "item" : view === 3 ? "itemLinear" : "item"}
      >
        <div className="icons">
          <MdOutlineFiberNew className="new-icon" />
          <MdOutlineLocationOn className="location-icon" />
        </div>
        <div className="heading">
          <h2>Just for kids</h2>
          <span>
            <FiMoreVertical />
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          atque?
        </p>
        <div className="category">Bike</div>
        <table>
          <tr className="table">
            <th>UNIT</th>
            <th>PRICE</th>
          </tr>
          <tr>
            <th>Hour</th>
            <th>$25</th>
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
      </article>
    </div>
  );
}

export default Item;
