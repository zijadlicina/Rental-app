import React, { useEffect, useState } from "react";
import Item from "./Item";

import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import ModalItem from "./ModalItem";
import ModalFeedback from "./ModalFeedback";

function Items({ rentals, bikes, fetchUsers, isLoading, setCurrentRental, currentRental}) {
  console.log(rentals);

  useEffect(() => {
    fetchUsers();
  }, []);

  const [modal, setModal] = useState(0);

  return (
    <div className={modal ? "items" : "items"} style={{ position: "relative" }}>
      {rentals.map((rentItem) => {
        return (
          <Item
            rentItem={rentItem}
            setModal={setModal}
            modal={modal}
            setCurrentRental={setCurrentRental}
          />
        );
      })}
      {modal === 1 ? (
        <>
          <div className="modal left">
            <AiOutlineLeft />
          </div>
          <div className="modal content">
            <ModalItem rentals={rentals} bikes={bikes} setModal={setModal} currentRental={currentRental}/>
          </div>
          <div className="modal right">
            <AiOutlineRight />
          </div>
        </>
      ) : modal === 2 ? (
        <>
          <div className="modal feedbackmodal">
            <ModalFeedback  rentals={rentals} bikes={bikes} setModal={setModal} currentRental={currentRental}/>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Items;
