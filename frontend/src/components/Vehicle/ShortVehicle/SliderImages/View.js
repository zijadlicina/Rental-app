import React, { useState } from "react";
import "./SliderImages.css";

function SliderImages({ images }) {
  return (
    <div className="images">
      <div className="main">
        <img src={images[0]} />
      </div>
      <div className="slider">
        {images.map((image) => {
          return <div className="slide">
            <img src={image} alt="imb_bike"/>
          </div>
        })}
      </div>
    </div>
  );
}

export default SliderImages;
