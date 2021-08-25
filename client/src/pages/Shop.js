import { observer } from "mobx-react-lite";
import React from "react";
import BrandsBar from "../components/BrandsBar";
import TypesBar from "../components/TypesBar";

import Device from "../components/DeviceItem";
import styled from "styled-components";
import { useStore } from "../store";

const Row = styled.div`
  height: 90vh;
  display: flex;
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
  gap: 10px;
  padding: 10px;
`;

const Shop = () => {
  const {
    deviceStore: { devices },
  } = useStore();

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
