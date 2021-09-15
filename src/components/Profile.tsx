import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuthentification, showToast } from '../actions/app.actions';
import { removeUserApartment, setUser } from '../actions/user.actions';
import { IAppUser } from '../reducers/types';
import { useHistory } from 'react-router';
import Routes from '../constants/routes';
import toastTypes from '../constants/toastTypes';
import { RootState } from '../reducers';
import { IApartment } from './interfaces';
import ApartmentList from './ApartmentList';

import '../styles/apartments.css';
import systemMessages from '../constants/systemMessages';

const ApartmentCard: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { apartments } = useSelector((state: RootState) => state.app);
  const userApartments: number[] = useSelector(
    (state: RootState) => state.user.apartments
  );
  const reservedApartments: IApartment[] = apartments.filter(
    (item: IApartment) => userApartments.includes(item.id)
  );
  const logoutHandler = () => {
    const defaultUser: IAppUser = { id: 0, email: '', apartments: [] }
    dispatch(setUserAuthentification(false));
    dispatch(setUser(defaultUser));
    history.push(Routes.Home);
    dispatch(
      showToast({
        toastMessage: systemMessages.LogOut,
        toastType: toastTypes.Warning
      })
    );
  }

  const cancelReserveHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ): void => {
    event.stopPropagation();
    dispatch(removeUserApartment(id));
    dispatch(
      showToast({
        toastMessage: systemMessages.RemoveApartmentsSuccess,
        toastType: toastTypes.Success,
      })
    );
  };

  return (
    <>
      <Header />
      <Button type="button" size="sm" onClick={logoutHandler}>
        Logout
      </Button>
      <ApartmentList
        apartments={reservedApartments}
        buttonText={'Cancel reserve'}
        buttonHandler={cancelReserveHandler}
      />
    </>
  );
};

export default ApartmentCard;
