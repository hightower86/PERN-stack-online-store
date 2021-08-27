import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  padding: 5px;
  border: 1px solid #999;
  border-radius: 3px;
  margin: 10px 0;
`;

const Input = ({ type, placeholder, value }) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} />;
};

export default Input;
