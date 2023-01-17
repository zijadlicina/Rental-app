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
import { Rating } from "@mui/material";

import ImagesGallery from "./ImagesGallery";

function ItemsSlider({ items }) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(() => {
    if (current === 0) return items.length - 1;
    return current - 1;
  })
  const [next, setNext] = useState(() => {
    if (items.length > 1) return current + 1;
    return current;
  });

  const { name, types, rating, weight, price, available, quantity } = items[current];

  const [nextItem, setNextItem] = useState(items[next]);
  const [currentItem, setCurrentItem] = useState(items[current]);
  const [prevItem, setPrevItem] = useState(items[previous])

  const handlerChangeImage = (type) => {
    if (type === "right"){
      let oldCurrent = current;
      setCurrent((prev) => {
        if (items.length - 1 === current) return 0;
        return prev + 1;
      })
      setNext((prev) => {
        if (prev === items.length - 1) return 0;
        return prev + 1;
      })
      setPrevious((prev) => {
        return oldCurrent;
      })
     
    } else {
      let oldCurrent = current;
      setCurrent((prev) => {
        if (0 === current) return items.length - 1;
        return prev - 1;
      })
      setPrevious((prev) => {
        if (prev === 0) return items.length - 1;
        return prev - 1;
      })
      setNext((prev) => {
        return oldCurrent;
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
          <div className="rating">
            <Rating value={rating} />
          </div>
          <table>
            <tr className="table">
              <th>USING</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>AVAILABLE</th>
            </tr>
            <tr>
              <td>9</td>
              <td>{price}$</td>
              <td>{quantity}</td>
              <td>{available}</td>
            </tr>
          </table>
          
        </div>
      </div>
      <div className="div-images">
        <ImagesGallery
          currentItem={items[current]}
          nextItem={items[next]}
          prevItem={items[previous]}
          handlerChangeImage={handlerChangeImage}
        />
      </div>
      <div className="output">
            <button className="read">Read More</button>
            <button className="rent">Rent Now</button>
      </div>
    </div>
  );
}

export default ItemsSlider;
