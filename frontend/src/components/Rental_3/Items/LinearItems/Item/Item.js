import React from "react";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { MdSort, MdOutlineFiberNew, MdOutlineLocationOn } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import "./Item.css";

import imgBike from "../../../../../images/pexels-philipp-m-100582(1).jpg";

function Item({ view }) {
  if (view === 2) {
    return (
      <article className="item-f25">
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
    );
  } else {
    return (
      <article className="item-f100">
        <div className="div-images">
          <div style={{ position: "relative" }}>
            <img src={imgBike} alt="bikeImage" />
            <div className="left-arrow">
              <span>
                <AiOutlineLeft className="left"/>
              </span>
            </div>
            <div className="right-arrow">
              <span>
                <AiOutlineRight className="right" />
              </span>
            </div>
          </div>
          <div className="main"></div>
        </div>
        <div className="div-info">
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
        </div>
      </article>
    );
  }
}

export default Item;
