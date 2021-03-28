import { useLocalStorage } from "./useLocalStorage";

export const useToken = () => {
  const [token, setToken] = useLocalStorage("superSecuredToken");
  return [token, setToken];
};
