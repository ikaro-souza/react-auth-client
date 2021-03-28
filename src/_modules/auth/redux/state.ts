export interface IAuthState {
  token?: string;
  loading: boolean;
  errorMessage?: string;
}

export class AuthenticatedState implements IAuthState {
  token: string;
  loading: boolean = false;

  constructor(user: string) {
    this.token = user;
  }
}

export class UnauthenticatedState implements IAuthState {
  loading = false;
}

export class LoadingAuthState implements IAuthState {
  loading = true;

  constructor(public token?: string) {}
}

export class AuthStateWithError implements IAuthState {
  loading = false;

  constructor(public errorMessage: string) {}
}
