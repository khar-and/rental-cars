import React, { useState } from "react";
import makes from "./makes.json";

import {
  Form,
  DivMiliage,
  InputMiliage,
  MiliageWrapper,
  Label,
  PriceSelect,
  CarWrapper,
  PriceWrapper,
  CarSelect,
  Submit,
} from "./Filters.styled";

const Filters = () => {
  const [make, setMake] = useState("");

  const handleMakeChange = (event) => {
    setMake(event.target.value);
  };

  return (
    <Form>
      <CarWrapper>
        <Label htmlFor="makeSelect">Car brand</Label>
        <CarSelect id="makeSelect" value={make} onChange={handleMakeChange}>
          <option value="">All</option>
          {makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </CarSelect>
      </CarWrapper>

      <PriceWrapper>
        <Label htmlFor="priceSelect">Price To $/ 1 hour</Label>
        <PriceSelect>
          <option value="">All</option>
        </PriceSelect>
      </PriceWrapper>

      <MiliageWrapper>
        <Label htmlFor="millage">Сar mileage / km</Label>
        <DivMiliage>
          <InputMiliage type="text" placeholder="From" />
          <InputMiliage type="text" placeholder="To" />
        </DivMiliage>
      </MiliageWrapper>

      <Submit type="submit">Search</Submit>
    </Form>
  );
};

export default Filters;
