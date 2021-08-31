import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchTypes } from "../http/deviceApi";
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
    deviceStore: { types, selectedType, setSelectedType, setTypes },
  } = useStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchTypes()
        .then((data) => setTypes(data))
        .then(() => setLoading(false));
    }, 900);
  }, []);

  if (loading) return <h2>Loading...</h2>;

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
