import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "..";
// import { useStore } from "../store";

const BrandsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* width: 100px; */
  gap: 5px;
`;

const BrandItem = styled.div`
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? "lightgray" : "")};
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

const BrandsBar = () => {
  // const {
  //   deviceStore: { brands, selectedBrand, setSelectedBrand },
  // } = useStore();
  const {
    deviceStore: { brands, selectedBrand, setSelectedBrand },
  } = useContext(Context);
  return (
    <BrandsList>
      {brands.map((b) => (
        <BrandItem
          key={b.id}
          active={b.id === selectedBrand.id}
          onClick={() => setSelectedBrand(b)}
        >
          {b.name}
        </BrandItem>
      ))}
    </BrandsList>
  );
};

export default observer(BrandsBar);
