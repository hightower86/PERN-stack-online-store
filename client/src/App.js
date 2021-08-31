import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { useStore } from "./store";
import { check } from "./http/userApi";

const AppContainer = styled.div`
  /* padding:20px; */
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const {
    userStore: { user, setUser, setIsAuth },
  } = useStore();

  const [loading, setLoading] = useState(true);

  console.log({ user });

  useEffect(() => {
    setTimeout(() => {
      check()
        .then(() => {
          setUser(user);
          setIsAuth(true);
          console.log("fired in useEffect");
        })
        .finally(() => setLoading(false));
    }, 600);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <BrowserRouter>
      <AppContainer>
        <NavBar />
        <NavBar />
        <AppRouter />
      </AppContainer>
    </BrowserRouter>
  );
}

export default observer(App);
