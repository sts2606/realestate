import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import CustomInput from './CustomInput';
import formInputAtributes from '../constants/formInputAtributes';
import { emailValidate, passwordValidate } from '../utils/validateInputs';
import { signUp } from '../services/auth.service';
import { setUserAuthentification, showToast } from '../actions/app.actions';
import { setUser } from '../actions/user.actions';
import Header from './Header';
import routes from '../constants/routes';

import '../styles/authentification-form.css';

const SignUp: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isEmailValidated, setIsEmailValidated] = useState<boolean>(false);
  const [isPasswordValidated, setIsPasswordValidated] = useState<boolean>(false);
  const [isConfirmPasswordValidated, setIsConfirmPasswordValidated] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmailValidated && isPasswordValidated && password === confirmPassword) {
      const user = { email, password };
      try {
        const newUser = signUp(user);
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
    if (id === formInputAtributes.Email) {
      setEmail(field.value);
      setIsEmailValidated(!!emailValidate(field.value));
    }
    if (id === formInputAtributes.Password) {
      setPassword(field.value);
      setIsPasswordValidated(!!passwordValidate(field.value));
    }
    if (id === formInputAtributes.ConfirmPassword) {
      setConfirmPassword(field.value);
      setIsConfirmPasswordValidated(!!passwordValidate(field.value));
    }
  };

  return (
    <>
      <Header />
      <Container className="authentification-form">
        <Form noValidate onSubmit={handleSubmit}>
          <CustomInput
            controlId={formInputAtributes.Email}
            label="Email"
            inputHandler={fieldHandler}
            placeholder="Email"
            value={email}
            valid={isEmailValidated}
            type={formInputAtributes.Email}
          />
          <CustomInput
            controlId={formInputAtributes.Password}
            label="Password"
            inputHandler={fieldHandler}
            placeholder="Password"
            value={password}
            valid={isPasswordValidated}
            type={formInputAtributes.Password}
          />
          <CustomInput
            controlId={formInputAtributes.ConfirmPassword}
            label="Confirm Password"
            inputHandler={fieldHandler}
            placeholder="Confirm Password"
            value={confirmPassword}
            valid={isConfirmPasswordValidated}
            type={formInputAtributes.Password}
          />
          <Button
            type="submit"
          >
            Sign Up
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
