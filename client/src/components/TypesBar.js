import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import deviceStore from "../store/DeviceStore";

const Bar = styled.div`
  height: 90vh;
  background-color: lightblue;
  padding: 10px;
`;

const TypeItem = styled.div`
  padding: 10px;
  background-color: ${(props) => (props.active ? "lightgray" : "white")};
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    /* background-color: lightgray; */
    color: white;
    box-shadow: 2px 2px 5px white;
  }
`;

const TypesBar = () => {
  const { types } = deviceStore;
  return (
    <Bar>
      {types.map((t) => (
        <TypeItem
          key={t.id}
          onClick={() => {
            deviceStore.setSelectedType(t);
          }}
          active={deviceStore.selectedType.id === t.id}
        >
          {t.name}
        </TypeItem>
      ))}
    </Bar>
  );
};

export default observer(TypesBar);
