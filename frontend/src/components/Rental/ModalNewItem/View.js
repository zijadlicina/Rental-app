import "./ModalNewItem.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AiOutlinePlus, AiOutlinePlusCircle} from "react-icons/ai";

import { Alert, CircularProgress, LinearProgress } from "@mui/material";
 
const ModalNewItem = () => {
  
  return (
    <div className="modal-new" style={{position: "fixed"}}>
        <AiOutlinePlusCircle className="icon"/>
        New
    </div>
  );
};

export default ModalNewItem;
