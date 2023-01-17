import React from "react";
import { useState } from "react";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import "./Categories.css";

function Categories({ categories, category, categories2, dimensions, provider, changeCategory, setProvider, changePage, authorization, alert }) {
  const {isAgency, isAdmin} = authorization;
  const [active, setActive] = useState(
    category === "all" ? 1 : 
    category === "bike" ? 2 :
    category === "scooter" ? 3 :
    category === "e-bike" ? 4 :
    category === "no category" ? 5 : 1
  );
  const [active2, setActive2] = useState(1);
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="categories">
      {dimensions < 600 && isAgency ? 
      <div className="tabs">
        <span className={activeTab === 0 ? "activeTab" : null} onClick={() => setActiveTab(0)}>Categories</span>
        <span className={activeTab === 1 ? "activeTab" : null} onClick={() => setActiveTab(1)}>Owners</span>
      </div>
      : null }
      {dimensions > 600 || activeTab === 0 ? 
      <ul>
        {dimensions > 600 ?
        <li><p className="title">Categories</p></li>
        : null }
        {categories.map((cat, id) => {
          return <li className="li-it">
          <p
            className={active === id + 1 ? "active cat" : "cat"}
            onClick={() => {
              changePage(1)
              setActive(id + 1);
              changeCategory(cat);
            }}
          >
            {cat === "no category" ? "others" : cat}
          </p> 
          </li>
        }) }
      </ul>
      : null}
      {isAgency && dimensions > 600 || isAgency && activeTab === 1 ?  
      <ul className="ul-list-2">
        {dimensions > 600 ? 
        <li><p className="title">Owners</p></li>
        : null}
        {categories2.map((cat, id) => {
          return <li className="li-it">
          <p
            className={active2 === id + 1 ? "active cat" : "cat"}
            onClick={() => {
              changePage(1)
              setActive2(id + 1);
              if (cat === "all") setProvider("all");
              else setProvider(provider._id);
            }}
          >
            {cat}
          </p> 
          </li>
        }) }
      </ul> : null}
    </div>
  );
}

export default Categories;
