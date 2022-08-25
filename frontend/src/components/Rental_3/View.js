import "./Rental.css";
import { useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import { MdOutlineFiberNew, MdOutlineLocationOn } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FiMoreVertical } from "react-icons/fi";

import Actions from "./Actions/Actions";
import Categories from "./Categories/Categories";
import Items from "./Items/Items";

const Rental = () => {
  const [dropDownFilter, setDropDownFilter] = useState(false);
  const [view, setView] = useState(1);
  return (
    <div className="body-rental">
      <div className="container-rental">
        {/* intro, heading and button - new item */}
        <div className="intro">
          <h1>Items</h1>
          <div className="btn-newitem">
            <AiOutlinePlus className="plus-icon" />
            <span>New Item</span>
          </div>
        </div>

        {/* actions (sort, search, view of items, filter) */}
        <Actions view={view} setView={setView} />

        {/* container "data" - categories and items */}
        <div className="data">
          <Categories />
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
