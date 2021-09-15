export interface IAppState {
  isUserAuthenticated: boolean;
  toastMessage: string,
}

export interface IAppUser {
  id?: number;
  email: string;
}
