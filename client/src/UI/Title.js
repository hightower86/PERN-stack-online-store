import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  text-align: center;
  margin: 20px auto;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
