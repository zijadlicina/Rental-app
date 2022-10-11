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
        <p>Loading...</p>
      ) : (
        reviews.map((rev) => {
          return <Review review={rev} users={users} bike={bike}/>;
        })
      )}
    </div>
  );
}

export default Reviews;
