import React, { useEffect } from "react";
import "./Items.css";


import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import ItemsSlider from "./ItemsSlider/ItemsSlider";
import LinearItems from "./LinearItems/LinearItems";
import { Alert } from "@mui/material";
import { useScrollTo } from "react-use-window-scroll";

function Items({ view, bikes, setErrorRent, page }) {
  const scrollTo = useScrollTo()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [page])


  if (view === 1) {
    return (
      <div className="content">
        <ItemsSlider items={bikes}/>
      </div>
    );
  }
  return (
    /* two options f25 and f100*/
    <div className="content">
      <div className="items">
        <LinearItems items={bikes} view={view} setErrorRent={setErrorRent} />
      </div>
    </div>
  );
}

export default Items;
