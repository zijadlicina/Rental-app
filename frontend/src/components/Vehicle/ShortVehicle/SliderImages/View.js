import React, { useState } from "react";
import "./SliderImages.css";

function SliderImages({ images }) {
  const [mainImage, setMainImage] = useState(0)

  const changeMainImage = (id) => {
    setMainImage(id)
  }
  return (
    <div className="images">
      <div className="main">
        <img src={images[mainImage]} />
      </div>
      <div className="slider">
        {images.map((image, id) => {
          return <div className="slide">
            <img className={mainImage === id ? "active" : null} src={image} onClick={() => changeMainImage(id)} alt="imb_bike"/>
          </div>
        })}
      </div>
    </div>
  );
}

export default SliderImages;
