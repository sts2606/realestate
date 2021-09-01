export interface IAppState {
  isUserAuthentificationed: boolean;
  toastMessage: string,
}

export interface IAppUser {
  id?: number;
  email: string;
}
