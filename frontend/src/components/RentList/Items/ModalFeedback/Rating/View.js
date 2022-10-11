import { useState } from "react";
import "./Rating.css";
import RatingItem from "./RatingItem";

let ratingTypes = ["terrible", "bad", "okay", "good", "amazing"];

const Rating = ({ feed, setFeed }) => {
  const [items, setItems] = useState(ratingTypes);
 
  return (
    <div className="rating-div">
      <div className="rating-container">
        {items.map((item, idx) => {
          return (
            <RatingItem
              item={item}
              idx={idx}
              setFeed={setFeed}
              feed={feed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
