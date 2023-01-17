import React, { useState } from "react";
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
import { MdOutlineDirectionsBike } from "react-icons/md";
import { GiKickScooter, GiDutchBike } from "react-icons/gi";
import { BsHouse } from "react-icons/bs";
import { CgUnavailable } from "react-icons/cg";
import { useScrollTo } from "react-use-window-scroll";

import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import { BsBicycle } from "react-icons/bs";

import "./Item.css";

import { Rating } from "@mui/material";

import first from "../../../../../images/pexels-philipp-m-100582(1).jpg";
import second from "../../../../../images/pexels-pixabay-159192.jpg";
import third from "../../../../../images/pexels-leandro-boogalu-1149601.jpg";

import { useNavigate } from "react-router-dom";

function Item({ view, item, user, authorization, providerState, setErrorRent }) {
  const { isGuest, isAdmin, isUser, isAgency } = authorization;
  const {
    _id,
    name,
    price,
    rating,
    images,
    createdAt,
    category,
    quantity,
    available,
    provider,
    used,
    fetchOneBike,
  } = item;
  let image = images[0];
  const scrollTo = useScrollTo()
  let i = parseInt(createdAt);
  const [slideImage, setSlideImage] = useState(0);
  const [circles, setCircles] = useState(Array(images.length).fill(0));

  const navigate = useNavigate();

  const navigateToRent = () => {
    if (isGuest) {
      navigate(`/rental/rent/guest/${_id}`);
    } else navigate(`/rental/rent/${user._id}/${_id}/`);
  };

  const vehicleHandler = () => {
    scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      navigate(`/vehicle/${_id}`)
  };

  const handleRent = () => {
    if (available === 0) {
      setErrorRent(true)
    } 
    else {
      if (!user) navigate(`/rental/rent/guest/${_id}`);
      else navigate(`/rental/rent/${user._id}/${_id}/`);
    }
  }

  if (view === 2) {
    return (
      <article className="item-f25">
        <div className="icons">
          {createdAt && Date.parse(createdAt) > Date.now() - 20 * 60 * 1000 ? (
            <MdOutlineFiberNew className="new-icon" />
          ) : null}
          <MdOutlineLocationOn className="location-icon" />
          {isAgency && provider._id === providerState._id ?
          <BsHouse /> : null}
          {available === 0 ? <CgUnavailable style={{color: "red"}}/> : null}
        </div>
        <div className="div-images">
            <img
              src={image}
              alt="bikeImage"
            />
        </div>
        <div className="heading">
          <h2 className={name.length > 20 ? "small" : null}>{name}</h2>
          <span>
            <FiMoreVertical />
          </span>
        </div>
        <div className="rating">
          <Rating value={rating} precision={0.5} readOnly /> 
        </div>
        <table>
          <tr className="table">
            <th>PRICE</th>
            <th>USED</th>
            <th>QUANTITY</th>
            <th>AVAILABLE</th>
          </tr>
          <tr>
            <th>${price}</th>
            <th>{used}</th>
            <th>{quantity}</th>
            <th>{available}</th>
          </tr>
        </table>
        <div className="btns">
        {isUser || isGuest ? 
          <button onClick={handleRent}>
            Rent Now
          </button>
          : null}
          <button className="read" onClick={() => vehicleHandler()}>Read More</button>
        </div>
      </article>
    );
  } else {
    return (
      <article className="item-f100">
        <div className="div-images">
          <div style={{ position: "relative" }}>
            <img src={images[slideImage]} alt="bikeImage" />
            {images.length === 1 ? null : 
            <div className="left-arrow">
              <span>
                <AiOutlineLeft
                  className="left"
                  onClick={() =>
                    setSlideImage((prev) => {
                      if (prev === 0) return images.length - 1;
                      return prev - 1;
                    })
                  }
                />
              </span>
            </div>
            }
            {images.length === 1 ? null : 
            <div className="right-arrow">
              <span>
                <AiOutlineRight
                  className="right"
                  onClick={() =>
                    setSlideImage((prev) => {
                      if (prev === images.length - 1) return 0;
                      return prev + 1;
                    })
                  }
                />
              </span>
            </div>
            }
            <div className="circles">
              {circles.map((ob, idx) => {
                return (
                  <div
                    className={idx === slideImage ? "currentCircle" : "circle"}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="main"></div>
        </div>
        <div className="div-info">
          <div className="icons">
            {createdAt &&
            Date.parse(createdAt) > Date.now() - 20 * 60 * 1000 ? (
              <MdOutlineFiberNew
                className="new-icon"
              />
            ) : null}{" "}
            <MdOutlineLocationOn className="location-icon" />
            {isAgency && provider._id === providerState._id ?
            <BsHouse /> : null}
            {available === 0 ? <CgUnavailable style={{color: "red"}}/> : null}
          </div>
          <div className="heading">
            <h2>{name}</h2>
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
              <th>RATING</th>
            </tr>
            <tr>
              <th>Hour</th>
              <th>${price}</th>
              <th>{rating}</th>
            </tr>
          </table>
          
          <div className="btns">
            {isUser || isGuest ? 
            <button onClick={handleRent}>Rent Now</button>
            : null}
            <button onClick={() => navigate(`/vehicle/${_id}`)}>
              Read More
            </button>
          </div>
        </div>
      </article>
    );
  }
}
/*
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
          */
export default Item;
