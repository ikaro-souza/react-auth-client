import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "pages/Home";
import { Signup } from "_modules/auth/pages/Signup";
import { Feature } from "_modules/feature/pages/Feature";
import { PrivateRoute } from "./PrivateRoute";
import { Routes } from "_config/routes";
import { Login } from "_modules/auth/pages/Login";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.LOGIN} component={Login} />
        <Route path={Routes.SINGUP} component={Signup} />
        <PrivateRoute path={Routes.FEATURE} component={Feature} />
      </Switch>
    </BrowserRouter>
  );
};
