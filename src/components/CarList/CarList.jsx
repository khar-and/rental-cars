import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const CarList = ({ cars }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ul>
        {cars.map(({ id, img, make, model, year, rentalPrice }) => {
          return (
            <li key={id}>
              <img src={img} alt="Car foto" width={"274"} height={"268"} />

              <p>{make}</p>
              <p>{model}</p>
              <p>{year}</p>
              <p>{rentalPrice}</p>
              <Button label={"Learn more"} onClick={toggleModal} />
            </li>
          );
        })}
      </ul>
      {showModal && <Modal onClose={toggleModal} />}
    </>
  );
};

export default CarList;
