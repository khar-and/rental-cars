import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  margin: 50px 50px;
  font-size: 40px;

  border-radius: 10px;
  text-decoration: none;
  color: black;

  &:hover {
    color: red;
    border: 2px solid black;
  }

  &.active {
    background-color: orange;
    border: 2px solid black;
  }
`;

export const Navigation = styled.nav`
  margin-top: 10px;
  margin-left: 130px;
`;

export const Header = styled.nav`
  /* margin-top: 10px, 130px; */
  /* padding-bottom: 60px;
  position: fixed;
  top: 0;
  left: 0; */
  /* width: 100%; */
`;
