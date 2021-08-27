import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* max-width: 300px; */
  /* width: 100%; */
  padding: 5px 20px;
  margin: 10px 5px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "lightblue";

      case "success":
        return "lightgreen";

      case "danger":
        return "red";

      default:
        return "transparent";
    }
  }};
  color: white;

  &:hover {
    color: gray;
    background-color: white;
    cursor: pointer;
  }
`;

const Button = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;
