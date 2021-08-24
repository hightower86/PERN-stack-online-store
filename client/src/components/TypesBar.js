import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "..";
import { useStore } from "../store";

const Bar = styled.div`
  height: 90vh;
  background-color: lightblue;
  padding: 10px;
`;

const TypeItem = styled.div`
  padding: 10px;
  background-color: ${(props) => (props.active ? "lightgray" : "lightyellow")};
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px white;
  }
`;

const TypesBar = () => {
  const {
    deviceStore: { types, selectedType, setSelectedType },
  } = useContext(Context);
  // const {
  //   deviceStore: { types, selectedType, setSelectedType },
  // } = useStore();
  return (
    <Bar>
      {types.map((t) => (
        <TypeItem
          key={t.id}
          onClick={() => {
            setSelectedType(t);
          }}
          active={selectedType.id === t.id}
        >
          {t.name}
        </TypeItem>
      ))}
    </Bar>
  );
};

export default observer(TypesBar);
