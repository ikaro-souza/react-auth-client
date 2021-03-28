import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../redux";
import { Redirect } from "react-router";
import { Routes } from "_config/routes";
import { RootState } from "redux/state";

export const Signout: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  React.useEffect(() => {
    dispatch(signout());
  }, [dispatch]);

  return token ? <h2>Signing out...</h2> : <Redirect to={Routes.HOME} />;
};
