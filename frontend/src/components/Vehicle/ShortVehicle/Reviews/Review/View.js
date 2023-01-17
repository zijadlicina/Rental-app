import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Review.css";
import moment from "moment";

function Review({ users, review, bike, alert }) {
  const [userOb, setUserOb] = useState(null);

  const { _id, user, message, grade, createdAt } = review;
  useEffect(() => {
    setUserOb(getUserById(users, user));
  }, []);
  return (
    <div className={alert.data && _id === alert.data._id ? "newreview review" : "review"}>
      {!userOb ? (
        <CircularProgress />
      ) : (
        <div className="column">
        <div className="rows">
          <div className="usernameImg">
            <img src={userOb.image} style={{width: "25px", height: "25px", borderRadius: "15px", marginRight: "6px"}}/>
          </div>
          <span className="username">{userOb.username}</span>
          <Rating className="rating" value={grade} readOnly />
        </div>
        <div className="message">
          <span style={{fontStyle: "italic"}}>"{message}"</span>
          <span className="date">
            {moment(createdAt).fromNow()}</span>
        </div>
        </div>
      )}
    </div>
  );
}

const getUserById = (users, user) => {
  let id = user._id;
  return users.find((x) => x._id === id);
};
export default Review;
