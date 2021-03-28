import React from "react";

export const useLocalStorage = (key: string) => {
  const [value, setValue] = React.useState(localStorage.getItem(key));

  const _setValue = (value: string) => {
    localStorage.setItem(key, value);
    setValue(value);
  };
  return [value, _setValue];
};
