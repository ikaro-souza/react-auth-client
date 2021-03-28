import { Home } from "pages/Home";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from "_config/routes";
import { Signup } from "_modules/auth/pages/Signup";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.SINGUP} component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};
