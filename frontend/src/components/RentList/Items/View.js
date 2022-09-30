import React, { useEffect, useState } from "react";
import Item from "./Item";

import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import ModalItem from "./ModalItem";

function Items({ rentals, fetchUsers, isLoading }) {
  console.log(rentals);

  useEffect(() => {
    fetchUsers();
  }, []);

  const [modal, setModal] = useState(false);

  return (
    <div className={modal ? "items" : "items"} style={{ position: "relative" }}>
      {rentals.map((rentItem) => {
        return <Item rentItem={rentItem} setModal={setModal} modal={modal} />;
      })}
      {modal ? (
        <>
          <div className="modal left">
            <AiOutlineLeft />
          </div>
          <div className="modal content">
            <ModalItem setModal={setModal}/>
          </div>
          <div className="modal right">
            <AiOutlineRight />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Items;
