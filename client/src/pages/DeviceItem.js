import React from "react";
import styled from "styled-components";

const ListItem = styled.div`
  max-width: 200px;
  flex: 1 0 100px;
  border: 1px solid #999;
  padding: 10px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5%;
`;

const Device = ({ device }) => {
  return (
    <ListItem>
      {device.name}
      <Img src={device.img} alt={device.name} />
      price: ${device.price} <br /> rating: {device.rating}
    </ListItem>
  );
};

export default Device;
