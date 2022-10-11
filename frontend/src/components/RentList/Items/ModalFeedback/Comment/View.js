import React, { useEffect, useState } from "react";
import "./Comment.css";

import { AiOutlineClose } from "react-icons/ai";

function Comment({ feed, setFeed}) {

  const commentHandler = (e) => {
    e.preventDefault();
    setFeed((prev) => {
      return {...prev, message: e.target.value}
    })
  }
  return (
    <div className="comment-container">
      <p>What are the main reasons for your rating?</p>
      <textarea
        type="text"
        name="comment"
        id="comment"
        value={feed.message}
        onChange={commentHandler}
      />
    </div>
  );
  }
export default Comment;
