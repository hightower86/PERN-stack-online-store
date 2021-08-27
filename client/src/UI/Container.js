import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 90vh;
  margin: 0 auto;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media (min-width: 1048px) {
    width: 1048px;
  }
`;

const Container = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;
