import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 752px;
  width: 541px;
  border-radius: 24px;
  background-color: #ffffff;
`;

export const Close = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  margin-left: 501px;
  margin-top: 16px;
`;

export const Img = styled.img`
  width: 460px;
  height: 248px;
  border-radius: 14px;
  margin-left: 40px;
`;

export const OtherInfo = styled.div`
  border: 1px solid blue;
  margin-top: 14px;
  margin-left: 40px;
  height: 342px;
  width: 461px;
`;

export const Link = styled.a`
  background-color: #3470ff;

  &:focus {
    background-color: #0b44cd;
  }
`;
