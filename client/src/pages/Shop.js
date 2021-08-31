import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import BrandsBar from "../components/BrandsBar";
import TypesBar from "../components/TypesBar";

import Device from "../components/DeviceItem";
import styled from "styled-components";
import { useStore } from "../store";
import { fetchDevices } from "../http/deviceApi";

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
    deviceStore: { devices, setDevices },
  } = useStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchDevices()
        .then((data) => setDevices(data))
        .then(() => setLoading(false));
    }, 1700);
  }, []);

  if (loading) return <h2>Loading...</h2>;

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
