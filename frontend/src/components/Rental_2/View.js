import "./Rental.css";
import { useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import {
  MdSort,
  MdOutlineFiberNew,
  MdOutlineLocationOn,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FiMoreVertical } from "react-icons/fi";

import Categories from "./Categories/Categories";
import Items from "./Items/Items";
import ViewItems from "./ViewItems/ViewItems";

const Rental = () => {
  const [dropDownFilter, setDropDownFilter] = useState(false)
  const [view, setView] = useState(1)

  return (
    <div className="body-rental">
      <div className="container-rental">
        <div className="intro">
          <h1>Items</h1>
          {/* button - new item */}
          <div className="btn-newitem">
            <AiOutlinePlus className="plus-icon" />
            <span>New Item</span>
          </div>
        </div>
        {/* actions (sort, search, view, filter) */}
        <div className="actions">
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
            ></input>
          </div>
          {/* Different types of viewing items (liear, blocks, slider) */}
          <ViewItems view={view} setView={setView}/>
        </div>

        <div className="items">
          <Categories
            dropDownFilter={dropDownFilter}
            setDropDownFilter={setDropDownFilter}
          />
          <Items
            view={view}
            dropDownFilter={dropDownFilter}
            setDropDownFilter={setDropDownFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default Rental;
