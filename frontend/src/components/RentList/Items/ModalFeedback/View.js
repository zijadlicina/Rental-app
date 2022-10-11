import React, { useEffect, useState } from "react";
import "./ModalFeedback.css";

import { AiOutlineClose } from "react-icons/ai";

import Rating from "./Rating";
import Comment from "./Comment";
import Checkbox from "./Checkbox";
import Button from "./Button";

function ModalItem({
  rentals,
  bikes,
  fetchUsers,
  isLoading,
  setModal,
  currentRental,
  user,
}) {
  const [rental, setRental] = useState(null);

  useEffect(() => {
    setRental(getRentalById(rentals, currentRental));
  }, []);


  const [feed, setFeed] = useState({
    userId: user._id,
    rentalId: null,
    grade: 0,
    message: "",
  })

  useEffect(() => {
    console.log("feed", feed)
  }, [feed])

  return (
    <div className="cont">
      <div className="header">
        {!rental ? <p>Loading...</p> : null}
        <div className="close">
          <AiOutlineClose className="closeicon" onClick={() => setModal(0)} />
        </div>
      </div>
      {!rental ? (
        <p>Loading...</p>
      ) : (
        <div className="box">
          <div className="row title">
            <h2>Give feedback</h2>
            <p>
              What do you think of the issue search experience within Jira
              projects?
            </p>
          </div>
          <div className="row rating">
            <Rating feed={feed} setFeed={setFeed} />
          </div>
          <div className="row comment">
            <Comment feed={feed} setFeed={setFeed} />
          </div>
          <div className="row checkbox">
            <Checkbox />
          </div>
          <div className="row btns">
            <Button rental={rental} feed={feed} setFeed={setFeed} bikes={bikes}/>
          </div>
        </div>
      )}
    </div>
  );
}

const getRentalById = (rentals, id) => {
  return rentals.find((x) => x._id === id);
};

export default ModalItem;
