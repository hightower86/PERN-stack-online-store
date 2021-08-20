import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import { DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/constants";

import userStore from "../store/UserStore";

const NavContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #999;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
`;
const StyledNavLink = styled(NavLink)`
  color: #fff;
  margin-right: 10px;
  text-decoration: none;
`;

const ButtonsContainer = styled.div`
  margin-left: auto;
`;

const NavBar = () => {
  const { isAuth } = userStore;
  return (
    <NavContainer>
      <StyledNavLink to={SHOP_ROUTE}>Shop</StyledNavLink>
      <StyledNavLink to={LOGIN_ROUTE}>Login</StyledNavLink>
      <ButtonsContainer>
        <Button>Админ панель</Button>
        <Button>Войти</Button>
      </ButtonsContainer>
    </NavContainer>
  );
};

export default NavBar;
