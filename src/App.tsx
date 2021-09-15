import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import MainPage from './components/MainPage';
import routes from './constants/routes';
import SignUp from './components/SignUp';
import CustomToast from './components/CustomToast';
import apartmentsList from './apartmentsList.json';
import { setApartments } from './actions/app.actions';
import ApartmentCard from './components/ApartmentCard';
import Profile from './components/Profile';
import { RootState } from './reducers';

import './App.css';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApartments(apartmentsList));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Route component={MainPage} path={routes.Home} exact />
        <Route component={LogIn} path={routes.Login} />
        <Route component={SignUp} path={routes.Signup} />
        <Route component={Profile} path={routes.Profile} />
        <Route component={ApartmentCard} path={`${routes.Apartment}/:id`} />
        <CustomToast />
      </div>
    </BrowserRouter>
  );
};

export default App;
