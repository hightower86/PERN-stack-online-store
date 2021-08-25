import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/constants";

import { observer } from "mobx-react-lite";
import { useStore } from "../store";

const NavContainer = styled.div`
  z-index: 100;
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
  const history = useHistory();

  const {
    userStore: { isAuth, setIsAuth, user },
  } = useStore();

  return (
    <NavContainer>
      <StyledNavLink to={SHOP_ROUTE}>Shop</StyledNavLink>
      <StyledNavLink to={LOGIN_ROUTE}>Login</StyledNavLink>
      <ButtonsContainer>
        {isAuth && (
          <Button onClick={() => history.push(ADMIN_ROUTE)}>
            Админ панель
          </Button>
        )}
        {!isAuth && <Button onClick={() => setIsAuth(true)}>Войти </Button>}
        {isAuth && (
          <Button
            onClick={() => {
              history.push(LOGIN_ROUTE);
              setIsAuth(false);
            }}
          >
            Выйти
          </Button>
        )}
      </ButtonsContainer>
    </NavContainer>
  );
};

export default observer(NavBar);
