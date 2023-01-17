import React, { useEffect, useState } from "react";
import "./ModalReject.css";

import { AiOutlineClose } from "react-icons/ai";

import Rating from "./Rating";
import Comment from "./Comment";
import Checkbox from "./Checkbox";
import Button from "./Button";
import {TiDocumentDelete} from "react-icons/ti"

function ModalReject({
   rentals,
   currentRental,
    setModal,
    rejectRental,
    setReload
}) {
  const [rental, setRental] = useState(null);
  const [reasonMessage, setReasonMessage] = useState("")

  const changeHandler = (e) => {
    setReasonMessage(e.target.value)
  }

  const yesDialogHandler = () => {
    let id = currentRental;
    rejectRental(id, reasonMessage, setReload)
  }
  const cancelDialogHandler = () => {
    setModal(0)
  }

  return (
      <div className="modal-dialog">
        <div className="cont">
          <div className="header">
            <div className="close">
              <AiOutlineClose className="closeicon" onClick={() => setModal(0)} />
            </div>
          </div>  
        </div>
        <div className="body">
          <div className="icon">
            <TiDocumentDelete />
          </div>
          <div className="title">
            <span>Reject request</span>
          </div>
          <div className="text">
            <span>Are you sure you want to reject Virgie Lewis?</span>
            <span>All the notes and impediments will be deleted and cannot be undone</span>
          </div>
          <div className="reason">
            <label>Reason of reject: (optional)</label>
            <textarea name="reasonMessage" value={reasonMessage} id="reasonMessage" onChange={changeHandler}/>
          </div>
          <div className="btns">
          <button className="dialog-yes" onClick={yesDialogHandler}>Yes, reject request</button>
          <button className="dialog-no" onClick={cancelDialogHandler}>Cancel, keep request</button>
        </div>
        </div>
      </div>
  );
}


export default ModalReject;
