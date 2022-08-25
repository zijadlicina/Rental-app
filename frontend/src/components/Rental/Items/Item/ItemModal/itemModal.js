import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";

function App({ name, description, img, rating, price }) {
  // Modal open state
  const [modal, setModal] = React.useState(true);
  const [readMore, setReadMore] = useState(false);
  // Toggle for Modal
  const toggle = () => setModal(!modal);

  let desc =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem odio exercitationem ad...";
  let descMore =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem odio exercitationem ad, eum facere cum, optio aliquid ab consectetur error dicta delectus est reiciendis perferendis? Velitnisi nostrum obcaecati.";

  return (
    <div
      style={{
        display: "block",
        width: 900,
      }}
    >
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>{name}</ModalHeader>
        <ModalBody>
          {!readMore ? desc : descMore}
          <span style={{marginLeft: "5px",color: "blue", cursor: "pointer"}} onClick={() => setReadMore(!readMore)}>{!readMore ? "Read More" : "Show Less"}</span>
          <br></br>
          <label style={{ fontWeight: "bold" }}>Rating: </label>
          <div style={{ color: "orange" }}>{rating}</div>
          <label style={{ fontWeight: "bold" }}>Price: </label>
          <div>
            {price}$ <i>per day</i>
          </div>
        </ModalBody>
        <img
          style={{
            float: "left",
            border: "2px solid #e4e4e4",
            borderRadius: "6px",
            width: "100%",
            height: "400px",
            opacity: "0.8",
          }}
          src={img}
          alt="bike image"
        />
        <ModalFooter>
          <Button color="primary" onClick={() => setModal(!modal)}>
            Rent
          </Button>{" "}
          <Button color="secondary" onClick={() => setModal(!modal)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
