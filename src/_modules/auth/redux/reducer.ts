import { AuthActions, IAuthAction } from "./actionTypes";
import {
  AuthenticatedState,
  AuthStateWithError,
  IAuthState,
  LoadingAuthState,
  UnauthenticatedState,
} from "./state";

const initialState: IAuthState = new UnauthenticatedState();

export const authReducer = (state = initialState, action: IAuthAction) => {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS:
    case AuthActions.SIGNUP_SUCCESS:
      return new AuthenticatedState(action.payload);

    case AuthActions.SINGOUT_SUCCESS:
      return new UnauthenticatedState();

    case AuthActions.LOGIN_START:
    case AuthActions.SIGNUP_START:
    case AuthActions.SINGOUT_START:
      return new LoadingAuthState(state.token);

    case AuthActions.LOGIN_FAIL:
    case AuthActions.SIGNUP_FAIL:
    case AuthActions.SINGOUT_FAIL:
      return new AuthStateWithError(action.payload);

    default:
      return state;
  }
};
