import React from "react";
import styled from "styled-components";
// import Button from "../Button/Button";

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
} from "../CarItem/CarItem.styled";

const HeartIcon = styled(HeartIconH)`
  width: 16px;
  height: 14px;
  transition: color 0.3s ease;
  fill: ${({ isFavorite }) =>
    isFavorite ? "#3470FF" : "none"}; /* Колір іконки */
`;

const FavoriteItem = ({ favCar, changeFavorites }) => {
  //   const [isFavorite, setIsFavorite] = useState(false);
  let adressParts = favCar.address.split(",").map((part) => part.trim());

  return (
    <>
      <ItemCar>
        <WrapImg>
          <Img src={favCar.img} alt="Car foto" />
          <IconBtn onClick={changeFavorites}>
            <HeartIcon isFavorite={true} />
          </IconBtn>
        </WrapImg>
        <SpanWrap>
          <div>
            <Span>{favCar.make}</Span>
            <Model>{`${favCar.model},`}</Model>
            <Span>{favCar.year}</Span>
          </div>
          <Price>{favCar.rentalPrice}</Price>
        </SpanWrap>
        <OptionWrap>
          <OptSpan>{adressParts[1]}</OptSpan>
          <Vert />
          <OptSpan>{adressParts[2]}</OptSpan>
          <Vert />
          <OptSpan>{favCar.rentalCompany}</OptSpan>
          <Vert />
          <OptSpan>Premium</OptSpan>
          <Vert />
          <OptSpan>{favCar.type}</OptSpan>
          <Vert />
          <OptSpan>{favCar.model}</OptSpan>
          <Vert />
          <OptSpan>{favCar.id}</OptSpan>
        </OptionWrap>
        {/* <Button label={"Learn more"} onClick={toggleModal} size={"large"} /> */}
      </ItemCar>
      {/* {showModal && <Modal car={favCar} onClose={toggleModal} />} */}
    </>
  );
};

export default FavoriteItem;
