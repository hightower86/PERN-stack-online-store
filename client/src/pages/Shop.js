import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import BrandsBar from "../components/BrandsBar";
import TypesBar from "../components/TypesBar";

import deviceStore from "../store/DeviceStore";

const ListItem = styled.div`
  flex: 1 0 120px;
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

const Row = styled.div`
  height: 90vh;
  display: flex;
  width: 100%;
  /* gap: 10px; */
`;

const Left = styled.div`
  height: 100%;
  width: 30%;
  min-width: 150px;
  background-color: "lightgreen";
`;
const Right = styled.div`
  width: 60%;
  background-color: "lightblue";
`;

const DevicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Shop = () => {
  const { devices } = deviceStore;
  console.log("devices", devices);
  return (
    <Row>
      <Left>
        <TypesBar />
      </Left>
      <Right>
        <BrandsBar />
        <DevicesContainer>
          {devices?.map((device) => (
            <ListItem key={device.id}>
              {device.name}
              <Img src={device.img} alt={device.name} />
              price: ${device.price}
            </ListItem>
          ))}
        </DevicesContainer>
      </Right>
    </Row>
  );
};

export default observer(Shop);
