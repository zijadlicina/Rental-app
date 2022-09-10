import React, { useEffect, useState } from "react";
import "./Actions.css";

import ViewItems from "./ViewItems/ViewItems";
import { MdSort } from "react-icons/md";

import { Slider } from "@mui/material";
/* icon for expand and close filter div*/
import { BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";

function Actions({
  view,
  setView,
  changeLimit,
  changePage,
  changeSearch,
  changeFilter,
}) {
  const [dropDownFilter, setDropDownFilter] = useState(true);
  const [price, setPrice] = useState([0, 500]);
  const [rating, setRating] = useState([1, 5]);

  useEffect(() => {}, [price, rating]);

  const onCommitedHandler = (type) => {
    if (type === "price") {
      changeFilter((prev) => {
        return { price, rating: prev.rating };
      });
    } else if (type === "rating") {
      changeFilter((prev) => {
        return { price: prev.price, rating };
      });
    }
  };
  const resetFilter = () => {
    changeFilter((prev) => {
      return { price: [0, 500], rating: [1, 5] };
    });
    setPrice([0, 500]);
    setRating([1, 5]);
  };

  return (
    <div className="actions">
      <div className="row-1">
        <div className="sort">
          <label htmlFor="sort">
            <MdSort />
          </label>
          <select name="sort" id="sort">
            <option value="name">Sort By Name</option>
            <option value="price">Sort By Price</option>
            <option value="recommand">Sort By Recommand</option>
          </select>
        </div>
        <div className="search">
          <input
            type="text"
            id="search"
            name="search"
            placeholder={"Search"}
            onChange={(e) => changeSearch(e.target.value)}
          ></input>
        </div>
        {/* Different types of viewing items (linear, blocks, slider) */}
        <ViewItems
          view={view}
          setView={setView}
          changeLimit={changeLimit}
          changePage={changePage}
        />
      </div>
      <div className="row-filter-icon">
        <span>FILTER</span>
        {!dropDownFilter ? (
          <BiUpArrowCircle
            className="filter-icon"
            onClick={() => setDropDownFilter(!dropDownFilter)}
          />
        ) : (
          <BiDownArrowCircle
            className="filter-icon"
            onClick={() => setDropDownFilter(!dropDownFilter)}
          />
        )}
        <div></div>
      </div>
      {!dropDownFilter ? <>
      <div className={dropDownFilter ? "row-filter" : "row-filter-display"}>
        <div className="price filter">
          <div>
            <h2>Price</h2>
          </div>
          <Slider
            size="small"
            valueLabelDisplay="auto"
            min={0}
            max={500}
            marks={false}
            step={1}
            value={price}
            onChange={(e, newValue) => setPrice(newValue)}
            onChangeCommitted={() => onCommitedHandler("price")}
          />
          <div className="input">
            <div>
              <label htmlFor="min-price">Min Price</label>
              <input
                value={price[0]}
                type="number"
                name="min-price"
                id="min-price"
                onChange={(e) => {
                  setPrice((prev) => {
                    return [e.target.value, prev[1]];
                  });
                }}
                onBlur={() => onCommitedHandler("price")}
              ></input>
            </div>
            <div>
              <label htmlFor="max-price">Max Price</label>
              <input
                value={price[1]}
                type="number"
                name="max-price"
                id="max-price"
                onChange={(e) => {
                  setPrice((prev) => {
                    return [prev[0], e.target.value];
                  });
                }}
                onBlur={() => onCommitedHandler("price")}
              ></input>
            </div>
          </div>
        </div>
        <div className="btn-clearAll">
          <button onClick={resetFilter}>Clear All</button>
        </div>
        <div className="rating filter">
          <div>
            <h2>Rating</h2>
          </div>
          <Slider
            size="small"
            valueLabelDisplay="auto"
            min={1}
            max={5}
            marks={false}
            step={0.1}
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
            onChangeCommitted={() => onCommitedHandler("rating")}
          />
          <div className="input">
            <div>
              <label htmlFor="min-rating">Min Rating</label>
              <input
                value={rating[0]}
                type="number"
                name="min-rating"
                id="min-rating"
                onChange={(e) => {
                  setRating((prev) => {
                    return [e.target.value, prev[1]];
                  });
                }}
                onBlur={() => onCommitedHandler("rating")}
              ></input>
            </div>
            <div>
              <label htmlFor="max-rating">Max Price</label>
              <input
                value={rating[1]}
                type="number"
                name="max-rating"
                id="max-rating"
                onChange={(e) => {
                  setRating((prev) => {
                    return [prev[0], e.target.value];
                  });
                }}
                onBlur={() => onCommitedHandler("rating")}
              ></input>
            </div>
          </div>
        </div>
      </div>
      </> : null }
    </div>
  );
}

export default Actions;
