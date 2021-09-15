import { IUser } from '../components/interfaces';

const getAllUsers = (): string | null => localStorage.getItem('users');

const setUsers = (users: IUser[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const getUsersCount = () => Number(localStorage.getItem('usersCount')) || 0;

const increaseUsersCount = () => {
  localStorage.setItem('usersCount', JSON.stringify(getUsersCount() + 1));
};

const getIsUserLoggedIn = () => localStorage.getItem('isLoggedIn');

const storage = {
  setUsers,
  getIsUserLoggedIn,
  getAllUsers,
  getUsersCount,
  increaseUsersCount,
};

export default storage;
