export interface IAppState {
  isUserAuthenticated: boolean;
  toastMessage: string,
}

export interface IAppUser {
  email: string;
  id?: number;
}
