import React from "react";
import { Link } from "react-router-dom";
import { useToken } from "hooks/useToken";
import { Routes } from "_config/routes";
import "./Header.css";

export const Header: React.FC = () => {
  const [token, _] = useToken();

  const links = React.useMemo(() => {
    if (token)
      return [
        <Link to={Routes.FEATURE} key={Routes.FEATURE}>
          Nice feature
        </Link>,
        <Link to={Routes.SIGNOUT} key={Routes.SIGNOUT}>
          Sign out
        </Link>,
      ];

    return [
      <Link to={Routes.LOGIN} key={Routes.LOGIN}>
        Login
      </Link>,
      <Link to={Routes.SINGUP} key={Routes.SINGUP}>
        Sign up
      </Link>,
    ];
  }, [token]);

  return (
    <header className="header">
      <nav>
        <Link to={Routes.HOME}>Home</Link>
        {links}
      </nav>
    </header>
  );
};
