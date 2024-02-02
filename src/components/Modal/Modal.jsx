import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("modal-root");

const Modal = ({ onClose }) => {
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
    <div onClick={handleBackdropClick}>
      <div>Modal</div>
    </div>,
    modalRoot
  );
};

export default Modal;
