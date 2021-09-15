import IUser from '../components/interfaces';
import storage from './localStorage.service';

export const signUp = (user: IUser): IUser => {
  const localStorageUsers = storage.getAllUsers();
  const existedUsers = localStorageUsers ? JSON.parse(localStorageUsers) : [];
  const tempUser = existedUsers.find((item: IUser) => item.email === user.email);
  if (tempUser) {
    throw new Error('User with such mail already exists');
  }
  const newUser = { ...user, id: storage.getUsersCount() + 1 };
  storage.setUsers([...existedUsers, newUser]);
  storage.increaseUsersCount();
  return newUser;
};

export const logIn = (user: IUser): IUser => {
  const localStorageUsers = storage.getAllUsers();
  const existedUsers = localStorageUsers ? JSON.parse(localStorageUsers) : [];
  const tempUser = existedUsers.find((item: IUser) => item.email === user.email);
  if (tempUser.password !== user.password) {
    throw new Error('Incorrect email or password');
  }

  return tempUser;
};
