import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
// import { useStore } from "../store";
import { SHOP_ROUTE } from "../utils/constants";

const AppRouter = () => {
  // const {
  //   userStore: { user, isAuth },
  // } = useStore();

  const {
    userStore: { isAuth },
  } = useContext(Context);

  console.log("AppRouter rendered");
  console.log("isAuth", isAuth);
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} component={Component} exact />;
        })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} exact />;
      })}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default observer(AppRouter);
