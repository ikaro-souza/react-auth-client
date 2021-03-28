import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "_config/routes";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <Link to={Routes.HOME}>Redux Auth</Link>
        <Link to={Routes.LOGIN}>Login</Link>
        <Link to={Routes.SINGUP}>Sign up</Link>
      </nav>
    </header>
  );
};
