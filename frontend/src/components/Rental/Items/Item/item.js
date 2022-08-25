import React, { useState } from "react";
import homeImage from "../../../../images/pexels-philipp-m-100582(1).jpg";
import ItemModal from "./ItemModal/itemModal";
import { message } from "antd";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Item = ({ item, increase, decrease, rentHandler, itemPrev, itemNext }) => {
  const { name, description, model, price, rating, image } = item;
  const [img, setImg] = useState();
  const [imgPrev, setImgPrev] = useState();
  const [imgNext, setImgNext] = useState();
  const fetchImages = async () => {
    const imageUrl1 = image;
    const imageUrl2 = itemPrev.image;
    const imageUrl3 = itemNext.image;
    let res = await fetch(imageUrl1);
    let imageBlob = await res.blob();
    let imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL)
    //
    res = await fetch(imageUrl2);
    imageBlob = await res.blob();
    imageObjectURL = URL.createObjectURL(imageBlob);
    setImgPrev(imageObjectURL);
    //
    res = await fetch(imageUrl3);
    imageBlob = await res.blob();
    imageObjectURL = URL.createObjectURL(imageBlob);
    setImgNext(imageObjectURL);
  };

  useEffect(() => {
    fetchImages();
  }, [item]);
  // "dasdsadsa.jpg"
  const [modal, setModal] = useState(false);

  const done = 25;
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <article style={articleStyle}>
      {modal ? <ItemModal name={name} description={description} img={img}rating={rating} price={price}/> : null}
      <h3>{name}</h3>
      <p>{description}</p>
      <img
        style={{
          float: "left",
          border: "2px solid #e4e4e4",
          borderRadius: "6px",
          width: "30%",
          height: "150px",
          opacity: "0.6",
          cursor: "pointer",
          /*  backgroundImage: "url(/pexels-pixabay-159192.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll"
          */
        }}
        onClick={() => decrease()}
        src={imgPrev}
        alt="bike image"
      />
      <img
        style={{
          float: "left",
          border: "2px solid #e4e4e4",
          borderRadius: "6px",
          width: "40%",
          height: "200px",
        }}
        src={img}
        alt="bike image"
        onClick={() => toggle()}
      />
      <img
        style={{
          float: "right",
          border: "2px solid #e4e4e4",
          borderRadius: "6px",
          width: "30%",
          height: "150px",
          opacity: "0.6",
          cursor: "pointer",
        }}
        onClick={() => increase()}
        src={imgNext}
        alt="bike image"
      />
      <br style={{ clear: "both" }}></br>
      <br></br>
      <span>{price}$ per day</span>
      <span
        style={{
          float: "right",
          color: "orange",
          padding: "5px",
          width: "50px",
          border: "1px solid orange",
          borderRadius: "4px",
        }}
      >
        {rating}
      </span>
      <br></br>
      <button style={btnStyleRent} onClick={() => rentHandler()}>
        Rent
      </button>
      <div style={progressStyle}>
        <div
          style={{
            padding: "5px",
            background: "#1997f0",
            borderRadius: "5px",
            width: "25%",
            opacity: "1",
            color: "white",
          }}
        >
          {done}%
        </div>
      </div>
    </article>
  );
};

var articleStyle = {
  padding: "20px 250px",
  textAlign: "center",
};
var btnStyle = {
  float: "left",
  height: "30px",
  width: "50px",
  background: "#1997f0",
  border: "2px solid #1997f0",
  borderRadius: "10px",
  marginLeft: "50px",
  marginTop: "10px",
};
var btnStyleRent = {
  float: "left",
  height: "30px",
  width: "150px",
  background: "#245373",
  border: "2px solid #245373",
  borderRadius: "20px",
  marginLeft: "150px",
  marginTop: "10px",
  fontWidth: "bold",
  fontSize: "15px",
};
var progressStyle = {
  marginTop: "65px",
  clear: "both",
  padding: "10px",
  background: "lightgrey",
  borderRadius: "15px",
  widht: "100%",
};
export default Item;
