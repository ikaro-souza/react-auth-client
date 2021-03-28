import React from "react";
import { StoreProvider } from "redux/Provider";

export const Root: React.FC = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};
