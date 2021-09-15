export interface IUser {
  id?: number;
  email: string;
  password: string;
}

export interface IApartment {
  id: number;
  city: string;
  address: string;
  bedroomsCount: number;
  TV: boolean;
  airСonditioning: boolean;
  photos: string[];
  price: string;
}
