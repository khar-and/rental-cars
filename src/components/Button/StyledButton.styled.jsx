import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  height: 44px;
  font-size: 14px;
  color: white;
  width: ${({ size }) => (size === "large" ? "274px" : "168px")};
  background-color: #3470ff;
  border-radius: 12px;
  margin-top: ${({ size }) => (size === "large" ? "28px" : "24px")};
  margin-left: ${({ size }) => (size === "large" ? "0" : "40px")};
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
