import { observer } from "mobx-react-lite";
import React from "react";
import BrandsBar from "../components/BrandsBar";
import TypesBar from "../components/TypesBar";

import deviceStore from "../store/DeviceStore";
import Device from "./DeviceItem";
import styled from "styled-components";

const Row = styled.div`
  height: 90vh;
  display: flex;
  /* width: 100%; */
  /* gap: 10px; */
`;

const Left = styled.div`
  height: 100%;
  width: 30%;
  min-width: 150px;
  background-color: "lightgreen";
`;
const Right = styled.div`
  width: 70%;
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
            <Device device={device} key={device.id} />
          ))}
        </DevicesContainer>
      </Right>
    </Row>
  );
};

export default observer(Shop);
