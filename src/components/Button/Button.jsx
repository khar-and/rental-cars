import React from "react";
import { StyledButton } from "./StyledButton.styled";

const Button = ({ label, onClick, size }) => {
  return (
    <StyledButton type="button" size={size} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
