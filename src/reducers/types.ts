import { IApartment } from "../components/interfaces";

export interface IAppState {
  apartments: IApartment[],
  isUserAuthentificationed: boolean;
  toastMessage: string,
  toastType: string,
}

export interface IAppUser {
  id?: number;
  email: string;
  apartments: number[];
}
