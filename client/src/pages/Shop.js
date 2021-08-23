import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import TypesBar from "../components/TypesBar";

import deviceStore from "../store/DeviceStore";

const ListItem = styled.div`
  border: 1px solid #999;
  padding: 10px;
  margin: 5px auto;
  display: flex;
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
  background-color: "lightgreen";
`;
const Right = styled.div`
  width: 60%;
  background-color: "lightblue";
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
        {devices?.map((device) => (
          <ListItem key={device.id}>
            {device.name}
            <Img src={device.img} alt={device.name} />
          </ListItem>
        ))}
      </Right>
    </Row>
  );
};

export default observer(Shop);
