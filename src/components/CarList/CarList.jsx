import React from "react";

import CarItem from "../CarItem/CarItem";
import { Container, List, LoadMore } from "./CarList.styled";
import Filters from "../Filters/Filters";

const CarList = ({ cars }) => {
  return (
    <>
      <Container>
        <Filters />
        <List>
          {cars.map((car) => {
            return <CarItem key={car.id} car={car} />;
          })}
        </List>
        <LoadMore type="button">Load More</LoadMore>
      </Container>
    </>
  );
};

export default CarList;
