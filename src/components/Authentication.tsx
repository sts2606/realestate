import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../reducers';
import routes from '../constants/routes';

import '../styles/header.css';

const Authentication: FC = () => {
  const history = useHistory();
  const { isUserAuthenticated } = useSelector(
    (state: RootState) => state.app,
  );

  const loginButtonHandler = () => {
    history.push(routes.Login);
  };

  return (
    <>
      {isUserAuthenticated ? (
        <Button className="authentication-button">Profile</Button>
      ) : (
        <Button onClick={loginButtonHandler} className="authentication-button">Login</Button>
      )}
    </>
  );
};

export default Authentication;
