import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Backdrop,
  Close,
  Img,
  Link,
  ModalContent,
  OtherInfo,
} from "./Modal.styled";
import Button from "../Button/Button";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ car, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <div>
          <Close type="button" onClick={onClose}>
            X
          </Close>
          <Img src={car.img} alt="Select Car" />
        </div>
        <OtherInfo>Other info by Car</OtherInfo>
        <Link href="tel:+380684439426">
          <Button label={"Rental car"} />
        </Link>
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
