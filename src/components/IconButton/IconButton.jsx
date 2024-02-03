import React from "react";

const IconButton = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default IconButton;
