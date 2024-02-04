import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  width: 877px;
  height: 74px;
  margin: 50px auto;
`;

export const CarWrapper = styled.div`
  width: 224px;
  height: 74px;
`;

export const CarSelect = styled.select`
  font-size: 16px;
  line-height: 125%;
  color: rgba(18, 20, 23, 0.9);
  width: 100%;
  height: 48px;
  border-radius: 14px;
  border: none;
  background: #f7f7fb;
  padding: 14px 18px;
  margin-top: 8px;

  option {
    max-height: 200px;
    overflow-y: auto;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
`;

export const PriceSelect = styled.select`
  font-size: 16px;
  line-height: 125%;
  color: rgba(18, 20, 23, 0.9);

  width: 100%;

  height: 48px;
  border-radius: 14px;
  border: none;
  background: #f7f7fb;

  padding: 14px 18px;
  margin-top: 8px;
`;

export const PriceWrapper = styled.div`
  width: 125px;
  height: 74px;
`;

export const MiliageWrapper = styled.div`
  /* display: flex;
  flex-wrap: nowrap; */
  width: 320px;
  height: 74px;
`;

export const InputMiliage = styled.input`
  font-size: 16px;
  line-height: 125%;
  color: rgba(18, 20, 23, 0.9);

  width: 160px;
  padding: 14px 24px;
  border-radius: "14px 0px 0px 14px";
  background: #f7f7fb;
  border: transparent;
`;

export const DivMiliage = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 8px;
`;

export const Submit = styled.button`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  padding: 14px 44px;
  width: 136px;
  height: 48px;

  border-radius: 12px;
  background: #3470ff;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
