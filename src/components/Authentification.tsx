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

  const { email } = useSelector(
    (state: RootState) => state.user,
  );

  return (
    <>
      {isUserAuthentificationed ? (
        <Button
          onClick={() => history.push(routes.Profile)}
          className="authentification-button"
        >
          {email}
        </Button>
      ) : (
        <Button
          onClick={() => history.push(routes.Login)}
          className="authentification-button"
        >
          Login
        </Button>
      )}
    </>
  );
};

export default Authentification;
