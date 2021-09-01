import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import MainPage from './components/MainPage';
import routes from './constants/routes';

import './App.css';
import SignUp from './components/SignUp';
import CustomToast from './components/CustomToast';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route component={MainPage} path={routes.Home} exact />
        <Route component={LogIn} path={routes.Login} />
        <Route component={SignUp} path={routes.Signup} />
        <CustomToast />
      </div>
    </BrowserRouter>
  );
};

export default App;
