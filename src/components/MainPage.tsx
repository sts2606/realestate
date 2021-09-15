import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../actions/app.actions';
import { addNewUserApartment } from '../actions/user.actions';
import systemMessages from '../constants/systemMessages';
import toastTypes from '../constants/toastTypes';
import { RootState } from '../reducers';
import ApartmentList from './ApartmentList';
import Header from './Header';
import { IApartment } from './interfaces';

const MainPage: FC = () => {
  const dispatch = useDispatch();
  const { apartments } = useSelector((state: RootState) => state.app);
  const { isUserAuthentificationed } = useSelector(
    (state: RootState) => state.app
  );
  const userApartments: number[] = useSelector(
    (state: RootState) => state.user.apartments
  );
  const unReservedApartments: IApartment[] = apartments.filter(
    (item: IApartment) => !userApartments.includes(item.id)
  );

  const reserveHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ): void => {
    event.stopPropagation();
    if (isUserAuthentificationed) {
      dispatch(addNewUserApartment(id));
      dispatch(
        showToast({
          toastMessage: systemMessages.ReserveApartmentsSuccess,
          toastType: toastTypes.Success,
        })
      );
      return;
    }
    dispatch(
      showToast({
        toastMessage: systemMessages.ReserveApartmentsError,
        toastType: toastTypes.Danger,
      })
    );
  };

  return (
    <>
      <Header />
      <ApartmentList
        apartments={unReservedApartments}
        buttonText={'Reserve'}
        buttonHandler={reserveHandler}
      />
    </>
  );
};

export default MainPage;
