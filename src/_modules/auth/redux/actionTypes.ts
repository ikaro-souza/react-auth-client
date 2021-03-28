import { User } from "../models/user.model";

export enum AuthActions {
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",

  SIGNUP_START = "SIGNUP_START",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
  SIGNUP_FAIL = "SIGNUP_FAIL",

  SINGOUT_START = "SIGNOUT_START",
  SINGOUT_SUCCESS = "SIGNOUT_SUCCESS",
  SINGOUT_FAIL = "SIGNOUT_FAIL",
}

export interface IAuthAction {
  type: AuthActions;
  payload?: any;
}

export interface IAuthFailAction extends IAuthAction {
  payload: string;
}

export interface LoginSuccess extends IAuthAction {
  payload: User;
}

export interface SignUpSuccess extends IAuthAction {
  payload: User;
}
