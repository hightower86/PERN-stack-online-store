import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import { DEVICE_ROUTE } from "../utils/constants";

const DeviceItem = styled.div`
  position: relative;
  cursor: pointer;
  max-width: 200px;
  min-width: 150px;
  flex: 1 0 100px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #999;
  border-radius: 5px;
  padding: 10px;
  margin: 5px auto;
  display: flex;
  transition: all 0.5s ease-in-out;
  background-color: lightblue;
  &:hover {
    transform: scale(1.08);
  }
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5%;
`;

const StyledButton = styled(Button)`
  justify-self: flex-end;
`;

const handleToCartClick = (e) => {
  e.stopPropagation();
  console.log("to cart clicked");
};

const Device = ({ device }) => {
  const history = useHistory();
  return (
    <DeviceItem onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)}>
      {device.name}
      <Img src={device.img} alt={device.name} />
      price: ${device.price} <br /> rating: {device.rating}
      <StyledButton onClick={handleToCartClick}>В корзину</StyledButton>
    </DeviceItem>
  );
};

export default Device;
