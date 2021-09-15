import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import routes from '../constants/routes';
import CustomInput from './CustomInput';
import formInputAttributes from '../constants/formInputAttributes';
import { emailValidate, passwordValidate } from '../utils/validateInputs';
import { logIn } from '../services/auth.service';
import { setUser } from '../actions/user.actions';
import { setUserAuthentification, showToast } from '../actions/app.actions';

import '../styles/authentification-form.css';

const LogIn: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailValidated, setIsEmailValidated] = useState<boolean>(false);
  const [isPasswordValidated, setIsPasswordValidated] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmailValidated && isPasswordValidated) {
      const user = { email, password };
      try {
        const newUser = logIn(user);
        dispatch(setUser({ id: newUser.id, email: newUser.email }));
        dispatch(setUserAuthentification(true));
        history.push(routes.Home);
      } catch (error) {
        dispatch(showToast(error));
      }
    }
  };

  const fieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.currentTarget;
    const { id } = field;
    if (id === formInputAttributes.Email) {
      setEmail(field.value);
      setIsEmailValidated(!!emailValidate(field.value));
    }
    if (id === formInputAttributes.Password) {
      setPassword(field.value);
      setIsPasswordValidated(!!passwordValidate(field.value));
    }
  };

  return (
    <>
      <Header />
      <Container className="authentification-form">
        <Form noValidate onSubmit={handleSubmit}>
          <CustomInput
            controlId={formInputAttributes.Email}
            label="Email"
            inputHandler={fieldHandler}
            placeholder="Email"
            value={email}
            valid={isEmailValidated}
            type={formInputAttributes.Email}
          />
          <CustomInput
            controlId={formInputAttributes.Password}
            label="Password"
            inputHandler={fieldHandler}
            placeholder="Password"
            value={password}
            valid={isPasswordValidated}
            type={formInputAttributes.Password}
          />
          <Button type="submit" disabled={!isEmailValidated && !isPasswordValidated}>Login</Button>
          <div>
            Not registered yet?
            <a href={routes.Signup}>Register here!</a>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default LogIn;
