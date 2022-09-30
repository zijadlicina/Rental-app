import React from "react";
import "./ImagesGallery.css";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";

import { AiOutlineDoubleLeft, AiOutlineRight } from "react-icons/ai";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function ImagesGallery({ currentItem, prevItem, nextItem, handlerChangeImage }) {
  const { images } = currentItem;
  let imagesPrev = prevItem.images;
  let imagesNext = nextItem.images;

  return (
    <>
      <div className="side" onClick={() => handlerChangeImage("left")}>
        <div className="side-image">
          <img src={imagesPrev[0]} alt="bike image" />
        </div>
        <BiLeftArrow className={"left-arrow"} />
      </div>
      <div className="main-image">
        <img src={images[0]} alt="bike image" />
      </div>
      <div className="side" onClick={() => handlerChangeImage("right")}>
        <div className="side-image">
          <img src={imagesNext[0]} alt="bike image" />
        </div>
        <BiRightArrow className={"right-arrow"} />
      </div>
    </>
  );
}

export default ImagesGallery;
