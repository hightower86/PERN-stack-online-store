import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/constants";

import userStore from "../store/UserStore";
import { observer } from "mobx-react-lite";

const NavContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  min-height: 40px;
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
  console.log({ userStore });
  return (
    <NavContainer>
      <StyledNavLink to={SHOP_ROUTE}>Shop</StyledNavLink>
      <StyledNavLink to={LOGIN_ROUTE}>Login</StyledNavLink>
      <ButtonsContainer>
        {isAuth && <Button>Админ панель</Button>}
        {!isAuth && (
          <Button onClick={() => userStore.setIsAuth(true)}>Войти </Button>
        )}
        {isAuth && (
          <Button onClick={() => userStore.setIsAuth(false)}>Выйти</Button>
        )}
      </ButtonsContainer>
    </NavContainer>
  );
};

export default observer(NavBar);
