import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchBrands } from "../http/deviceApi";
import { useStore } from "../store";

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
  const {
    deviceStore: { brands, selectedBrand, setSelectedBrand, setBrands },
  } = useStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchBrands()
        .then((data) => setBrands(data))
        .then(() => setLoading(false));
    }, 1200);
  }, []);

  if (loading) return <h2>Loading...</h2>;

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
