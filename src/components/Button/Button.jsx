import React from "react";

const Button = ({ label, onClick, style }) => {
  return (
    <button type="button" style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
