import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px 20px;
  margin: 10px 5px;
  border: 1px solid #fff;
  border-radius: 4px;
  background-color: transparent;
  color: white;

  &:hover {
    color: gray;
    background-color: lightgray;
    cursor: pointer;
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
