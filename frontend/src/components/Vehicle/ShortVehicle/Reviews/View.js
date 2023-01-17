import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./Reviews.css";

function Reviews({ reviews, bike, fetchReviews, fetchUsers, loading, users }) {
  useEffect(() => {
    fetchReviews(bike._id);
    fetchUsers();
  }, []);
  return (
    <div className="reviews-vehicle">
      {!reviews ? (
        <div className="review">
          <CircularProgress />
          </div>
      ) : reviews.length === 0 ? 
      <p>No Result</p> : (
        reviews.map((rev) => {
          return <Review review={rev} users={users} bike={bike}/>;
        })
      )}
    </div>
  );
}

export default Reviews;
