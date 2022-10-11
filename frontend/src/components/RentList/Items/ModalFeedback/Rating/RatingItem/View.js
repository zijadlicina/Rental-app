import "./RatingItem.css";
import {
  TbMoodCry,
  TbMoodSad,
  TbMoodEmpty,
  TbMoodSmile,
  TbMoodHappy,
} from "react-icons/tb";
import { MdMoodBad } from "react-icons/md";

import { useEffect, useState } from "react";

const RatingItem = ({ item, idx, setFeed, feed }) => {
  const ratingHandler = (val) => {
    setFeed((prev) => {
      return {...prev, grad: val}
    });
  };
  return (
    <div
      className={feed.grad === idx ? "active rating-item" : "rating-item"}
      onClick={() => ratingHandler(idx)}
    >
      {idx === 0 ? (
        <div className="icon">
          <TbMoodCry />
        </div>
      ) : idx === 1 ? (
        <div className="icon">
          <TbMoodSad />
        </div>
      ) : idx === 2 ? (
        <div className="icon">
          <TbMoodEmpty />
        </div>
      ) : idx === 3 ? (
        <div className="icon">
          <TbMoodSmile />
        </div>
      ) : idx === 4 ? (
        <div className="icon">
          <TbMoodHappy />
        </div>
      ) : null}
      {idx === 0 ? (
        <div className="title">{item}</div>
      ) : idx === 1 ? (
        <div className="title">{item}</div>
      ) : idx === 2 ? (
        <div className="title">{item}</div>
      ) : idx === 3 ? (
        <div className="title">{item}</div>
      ) : idx === 4 ? (
        <div className="title">{item}</div>
      ) : null}
    </div>
  );
};

export default RatingItem;
