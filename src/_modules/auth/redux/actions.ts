import axios from "axios";
import { Dispatch } from "redux";
import { AuthActions, IAuthAction } from "./actionTypes";

const apiUrl = "http://localhost:6900/auth";

export const login = (email: string, password: string) => async (
  dispatch: Dispatch<IAuthAction>
) => {
  dispatch({
    type: AuthActions.LOGIN_START,
  });

  try {
    const response = await axios.post(`${apiUrl}/login`, { email, password });

    dispatch({
      type: AuthActions.LOGIN_SUCCESS,
      payload: response.data.data,
    });

    localStorage.setItem("superSecuredToken", response.data.data);
  } catch (error) {
    dispatch({
      type: AuthActions.LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const signup = (email: string, password: string) => async (
  dispatch: Dispatch<IAuthAction>
) => {
  dispatch({
    type: AuthActions.LOGIN_START,
  });

  try {
    const response = await axios.post(`${apiUrl}/signup`, {
      email,
      password,
    });

    dispatch({
      type: AuthActions.LOGIN_SUCCESS,
      payload: response.data.data,
    });

    localStorage.setItem("superSecuredToken", response.data.data);
  } catch (error) {
    console.log(error.response);

    dispatch({
      type: AuthActions.LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const signout = () => async (dispatch: Dispatch<IAuthAction>) => {
  dispatch({
    type: AuthActions.SINGOUT_START,
  });

  try {
    dispatch({
      type: AuthActions.SINGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: AuthActions.SINGOUT_FAIL,
    });
  }

  localStorage.removeItem("superSecuredToken");
};
