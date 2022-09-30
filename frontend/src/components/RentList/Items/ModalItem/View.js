import React, { useEffect, useState } from "react";
import "./ModalItem.css"

import { AiOutlineClose } from "react-icons/ai";
import  Timeline  from "./Timeline";

function ModalItem({ rentals, fetchUsers, isLoading, setModal }) {

  return (
    <div className="cont">
        <div className="close">
          <AiOutlineClose className="closeicon" onClick={() => setModal(false)}/>
        </div>
        <div className="text">
          <Timeline />
        </div>
    </div>
  );
}

export default ModalItem;
