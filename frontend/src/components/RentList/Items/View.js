import React, { useEffect, useState } from "react";
import Item from "./Item";

import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import ModalItem from "./ModalItem";
import ModalFeedback from "./ModalFeedback";
import ModalReject from "./ModalReject";

function Items({ rentsRef, setReload, rentals, bikes, fetchUsers, fetchProviders, fetchBikes, setCurrentRental, currentRental}) {
  useEffect(() => {
    fetchUsers();
    let query2 = "limit=20";
    fetchBikes(query2)
    fetchProviders()
  }, []);

  const [modal, setModal] = useState(0);

  if (rentals.length === 0) return (
    <div className="rent-empty">
      <h3>No Result</h3>
    </div>
  )
  return (
    <div className={modal ? "items" : "items"} style={{ position: "relative" }}>
      {rentals.map((rentItem, i) => {
        return (
          <Item
            key={i}
            id={i}
            rentsRef={rentsRef}
            rentItem={rentItem}
            setModal={setModal}
            modal={modal}
            setCurrentRental={setCurrentRental}
            setReload={setReload}
          />
        );
      })}
      {modal === 1 ? (
        <>
          
          <div className="modal content">
            <ModalItem rentals={rentals} bikes={bikes} setModal={setModal} currentRental={currentRental}/>
          </div>
        
        </>
      ) : modal === 2 ? (
        <>
          <div className="modal feedbackmodal">
            <ModalFeedback  rentals={rentals} bikes={bikes} setModal={setModal} currentRental={currentRental}/>
          </div>
        </>
      ) : modal === 3 ? (
        <>
          <div className="modal rejectmodal">
            <ModalReject setReload={setReload} rentals={rentals} currentRental={currentRental} setModal={setModal}/>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Items;
