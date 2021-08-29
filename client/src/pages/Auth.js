import { set } from "mobx";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { login, registration } from "../http/userApi";
import { useStore } from "../store";
import Button from "../UI/Button";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/constants";

const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FormContainer = styled.div`
  padding: 20px;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #999;
  box-shadow: 5px 5px 5px 0.5 #777;
  color: white;
`;

const Form = styled.form`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  padding: 5px;
  margin: 10px 0;
`;

const Auth = () => {
  const {
    userStore: { user, setUser, setIsAuth },
  } = useStore();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    let data;
    try {
      if (isLogin) {
        data = await login({ email, password });
      } else {
        data = await registration({ email, password });
      }
      setUser(data);
      setIsAuth(true);
      history.push(SHOP_ROUTE);
    } catch (e) {
      window.alert(e.response?.data?.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    click();
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <FormContainer>
        {isLogin ? <h2>Авторизация</h2> : <h2>Регистрация</h2>}
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button type="submit">{isLogin ? "Войти" : "Регистрация"}</Button>
          {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}
          {isLogin && (
            <NavLink to={REGISTRATION_ROUTE}>зарегистрироваться</NavLink>
          )}
          {!isLogin && <NavLink to={LOGIN_ROUTE}>войти</NavLink>}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Auth;
