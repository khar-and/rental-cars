import React from "react";

import CarItem from "../CarItem/CarItem";
import { List } from "./CarList.styled";

const CarList = ({ cars }) => {
  return (
    <>
      <List>
        {cars.map((car) => {
          return <CarItem key={car.id} car={car} />;
        })}
      </List>
    </>
  );
};

export default CarList;
