import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Review.css";

function Review({ users, review, bike, alert }) {
  const [userOb, setUserOb] = useState(null);

  const { _id, user, message, grade } = review;
  useEffect(() => {
    setUserOb(getUserById(users, user));
  }, []);
  return (
    <div className={alert.data && _id === alert.data._id ? "newreview review" : "review"}>
      {!userOb ? (
        <p>Loading...</p>
      ) : (
        <div className="username">
          <img></img>
          {userOb.username}
        </div>
      )}
      <div className="message">{message}</div>
      <Rating className="rating" value={grade} readOnly />
    </div>
  );
}

const getUserById = (users, user) => {
  let id = user._id;
  return users.find((x) => x._id === id);
};
export default Review;
