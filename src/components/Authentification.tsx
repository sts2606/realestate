import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../reducers';
import routes from '../constants/routes';

import '../styles/header.css';

const Authentification: FC = () => {
  const history = useHistory();
  const { isUserAuthentificationed } = useSelector(
    (state: RootState) => state.app,
  );

  const loginButtonHandler = () => {
    history.push(routes.Login);
  };

  return (
    <>
      {isUserAuthentificationed ? (
        <Button className="authentification-button">Profile</Button>
      ) : (
        <Button onClick={loginButtonHandler} className="authentification-button">Login</Button>
      )}
    </>
  );
};

export default Authentification;
