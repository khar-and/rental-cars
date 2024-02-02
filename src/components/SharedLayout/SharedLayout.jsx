import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navigation, StyledLink } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Navigation>
        <hr />
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
