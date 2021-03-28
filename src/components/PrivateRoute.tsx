import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { Routes } from "_config/routes";

export const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const token = localStorage.getItem("superSecuredToken");

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: Routes.LOGIN,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
