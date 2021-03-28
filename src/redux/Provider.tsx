import React from "react";
import { Provider } from "react-redux";
import { initializeStore } from "./store";

interface StoreProviderProps {
  initialState?: Object;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({
  initialState,
  children,
}) => {
  const store = initializeStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
