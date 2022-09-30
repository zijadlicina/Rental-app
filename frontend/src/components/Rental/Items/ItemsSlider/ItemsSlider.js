import React, { useState } from "react";
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

function ItemsSlider({ items }) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(() => {
    if (current - 1 < 1) return items.length - 1;
    return current - 1;
  })
  const [next, setNext] = useState(() => {
    if (items.length > 1) return current + 1;
    return current;
  });

  const { name, types, rating, weight, price } = items[current];

  const [nextItem, setNextItem] = useState(items[next]);
  const [currentItem, setCurrentItem] = useState(items[current]);
  const [prevItem, setPrevItem] = useState(items[previous])
  console.log("prevItem", prevItem)

  const handlerChangeImage = (type) => {
    console.log(type);
    if (type === "right"){

      setNext(() => {

      })
    }
  };  
  return (
    <div className="items-listSlider">
      <div className="input">
        <div className="detail">
          <div className="icons"></div>
          <h1>{name}</h1>
          <div className="types">
            {types.map((type) => {
              return <span>{type}</span>;
            })}
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
              <td>${price}</td>
              <td style={{ color: "orange" }}>{rating}</td>
              <td>{weight}kg</td>
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
      <div className="div-images">
        <ImagesGallery
          currentItem={currentItem}
          nextItem={nextItem}
          prevItem={prevItem}
          handlerChangeImage={handlerChangeImage}
        />
      </div>
      <div className="output" style={{ border: "1px solid blue" }}></div>
    </div>
  );
}

export default ItemsSlider;
