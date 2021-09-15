import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import CustomInput from './CustomInput';
import formInputAttributes from '../constants/formInputAttributes';
import { emailValidate, passwordValidate } from '../utils/validateInputs';
import { signUp } from '../services/auth.service';
import { setUserAuthentication, showToast } from '../actions/app.actions';
import { setUser } from '../actions/user.actions';
import Header from './Header';
import routes from '../constants/routes';

import '../styles/authentication-form.css';

const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [isPasswordValidated, setIsPasswordValidated] = useState(false);
  const [isConfirmPasswordValidated, setIsConfirmPasswordValidated] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmailValidated && isPasswordValidated && password === confirmPassword) {
      const user = { email, password };
      try {
        const newUser = signUp(user);
        dispatch(setUser({ id: newUser.id, email: newUser.email }));
        dispatch(setUserAuthentication(true));
        history.push(routes.Home);
      } catch (error) {
        if (error instanceof Error) {
          dispatch(showToast(error.message));
        }
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
    if (id === formInputAttributes.ConfirmPassword) {
      setConfirmPassword(field.value);
      setIsConfirmPasswordValidated(!!passwordValidate(field.value));
    }
  };

  return (
    <>
      <Header />
      <Container className="authentication-form">
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
          <CustomInput
            controlId={formInputAttributes.ConfirmPassword}
            label="Confirm Password"
            inputHandler={fieldHandler}
            placeholder="Confirm Password"
            value={confirmPassword}
            valid={isConfirmPasswordValidated}
            type={formInputAttributes.Password}
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
