import React, { useEffect, useState } from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

function Button({ feed, setFeed, rental, addFeedback, bikes }) {
  const navigate = useNavigate();
  useEffect(() => {
    setFeed((prev) => {
      return { ...prev, rentalId: rental._id };
    });
  });
  const submitHandler = async () => {
    addFeedback(feed);
    navigate("/vehicle/" + rental.bike._id);
  };
  return (
    <div className="buttons-container">
      <button className="submit" onClick={submitHandler}>
        Submit
      </button>
      <button className="cancel">Cancel</button>
    </div>
  );
}
const getBikeById = (bikes, id) => {
  return bikes.find((x) => x._id === id);
};
export default Button;
