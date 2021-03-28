import { useToken } from "hooks/useToken";
import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { Routes } from "_config/routes";

export const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const [token] = useToken();

  const render = (Component: any) => (routeProps: RouteProps) => {
    if (!Component) return null;
    if (token) return <Component {...routeProps} />;

    return (
      <Redirect
        to={{
          pathname: Routes.LOGIN,
          state: { from: routeProps.location },
        }}
      />
    );
  };

  return <Route {...rest} render={render(component)} />;
};
