import React from 'react'
import "./ImagesGallery.css"
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";

import {
  AiOutlineDoubleLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
    function ImagesGallery() {
      return (
        <>
          <div className="side">
            <div className="side-image">
              <div className="fakeImg">Left Image</div>
            </div>
            <BiLeftArrow className={"left-arrow"} />
          </div>
          <div className="main-image">
            <div className="fakeImg">Main Image</div>
          </div>
          <div className="side">
            <div className="side-image">
              <div className="fakeImg">Right Image</div>
            </div>
            <BiRightArrow className={"right-arrow"} />
          </div>
        </>
      );
    };

export default ImagesGallery