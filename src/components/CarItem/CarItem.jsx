import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { ReactComponent as HeartIconH } from "../../icons/Vector.svg";
import { IconBtn } from "../IconButton/IconButton.styled";
import {
  Img,
  ItemCar,
  Model,
  Span,
  SpanWrap,
  WrapImg,
  Price,
  OptionWrap,
  Vert,
  OptSpan,
} from "./CarItem.styled";

const HeartIcon = styled(HeartIconH)`
  width: 16px;
  height: 14px;
  transition: color 0.3s ease;
  fill: ${({ isFavorite }) =>
    isFavorite ? "#3470FF" : "none"}; /* Колір іконки */
`;

const CarItem = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Обробка данних з картки витягуємо інформацію з масивів
  let adressParts = car.address.split(",").map((part) => part.trim()); // 1 та 2 елемент масиву

  const handleButtonClick = () => {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!isFavorite) {
      favorites.push(car);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      const delFromFavorites = favorites.filter((item) => item.id !== car.id);
      localStorage.setItem("favorites", JSON.stringify(delFromFavorites));
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ItemCar>
        <WrapImg>
          <Img src={car.img} alt="Car foto" />
          <IconBtn onClick={handleButtonClick}>
            <HeartIcon isFavorite={isFavorite} />
          </IconBtn>
        </WrapImg>
        <SpanWrap>
          <div>
            <Span>{car.make}</Span>
            <Model>{`${car.model},`}</Model>
            <Span>{car.year}</Span>
          </div>
          <Price>{car.rentalPrice}</Price>
        </SpanWrap>
        <OptionWrap>
          <OptSpan>{adressParts[1]}</OptSpan>
          <Vert />
          <OptSpan>{adressParts[2]}</OptSpan>
          <Vert />
          <OptSpan>{car.rentalCompany}</OptSpan>
          <Vert />
          <OptSpan>Premium</OptSpan>
          <Vert />
          <OptSpan>{car.type}</OptSpan>
          <Vert />
          <OptSpan>{car.model}</OptSpan>
          <Vert />
          <OptSpan>{car.id}</OptSpan>
        </OptionWrap>
        <Button label={"Learn more"} onClick={toggleModal} size={"large"} />
      </ItemCar>
      {showModal && <Modal car={car} onClose={toggleModal} />}
    </>
  );
};

export default CarItem;
