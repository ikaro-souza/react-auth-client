import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "redux/state";
import { Routes } from "_config/routes";
import "./Header.css";

export const Header: React.FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  return (
    <header className="header">
      <nav>
        <Link to={Routes.HOME}>Redux Auth</Link>
        {token && <Link to={Routes.FEATURE}>Nice feature</Link>}
        <Link to={Routes.LOGIN}>Login</Link>
        <Link to={Routes.SINGUP}>Sign up</Link>
      </nav>
    </header>
  );
};
