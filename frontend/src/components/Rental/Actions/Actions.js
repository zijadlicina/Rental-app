import React, { useEffect, useState } from "react";
import "./Actions.css";

import ViewItems from "./ViewItems/ViewItems";
import { MdSort } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Slider } from "@mui/material";
/* icon for expand and close filter div*/
import { BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";

function Actions({
  dimensions,
  search,
  sort,
  filter,
  isAgency,
  isAdmin,
  setStatusItems,
  statusItems,
  view,
  setView,
  changeLimit,
  changePage,
  changeSearch,
  changeFilter,
  changeSort,
}) {
  const [dropDownFilter, setDropDownFilter] = useState(true);
  const [price, setPrice] = useState([filter.price[0], filter.price[1]]);
  const [rating, setRating] = useState([filter.rating[0], filter.rating[1]]);

  const onCommitedHandler = (type) => {
    changePage(1)
    if (type === "price") {
      if (price[0] > price[1]) return;
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
    changePage(1)
    changeFilter((prev) => {
      return { price: [0, 200], rating: [1, 5] };
    });
    setPrice([0, 200]);
    setRating([1, 5]);
    setStatusItems("yes")
  };

  useEffect(() => {

  }, [statusItems])

  return (
    <div className="actions">
      <div className="row-1">
        <div className="sort">
          <label htmlFor="sort">
            <MdSort className="icon-sort"/>
          </label>
          <select name="sort" id="sort" onChange={(e) => changeSort(e.target.value)} 
          value={sort}>
            <option value="newest">Newest</option>
            <option value="used">Most used</option>
            <option value="best">Best grades</option>
          </select>
        </div>
        <div className="search">
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            placeholder={"Search"}
            onChange={(e) => changeSearch(e.target.value)}
          ></input>
        </div>
        {/* Different types of viewing items (linear, blocks, slider) */}
        <ViewItems
          dimensions={dimensions}
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
      </div>
      {!dropDownFilter ? <>
      <div className={dropDownFilter ? "row-filter" : "row-filter-display"}>
        {isAgency ? 
        <div className="checkboxs">
          <FormControl className="control-form">
            <FormLabel id={statusItems}>Available</FormLabel>
            <RadioGroup
              aria-labelledby="statusItems"
              defaultValue="yes"
              name="status"
            >
              <FormControlLabel value="all" checked={statusItems === "all"} onClick={() => {changePage(1); setStatusItems("all")}} control={<Radio />} label="All" />
              <FormControlLabel value="yes" checked={statusItems === "yes"} onClick={() => {changePage(1); setStatusItems("yes")}} control={<Radio />} label="Yes" />
              <FormControlLabel value="no" checked={statusItems === "no"} onClick={() => {changePage(1); setStatusItems("no")}} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl> 
          </div> : null}
        <div className="price filter">
          <div>
            <h2>Price</h2>
          </div>
          <Slider
            size="small"
            valueLabelDisplay="auto"
            min={0}
            max={200}
            marks={false}
            step={1}
            value={[filter.price[0], filter.price[1]]}
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
            value={[filter.rating[0], filter.rating[1]]}
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
