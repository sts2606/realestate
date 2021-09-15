import React, { FC } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

interface CustomInputProps {
  value: string,
  controlId: string,
  label: string,
  inputHandler: (val: React.ChangeEvent<HTMLInputElement>) => void,
  valid: boolean,
  type?: string,
  placeholder?: string,
}

const CustomInput: FC<CustomInputProps> = ({
  controlId,
  label,
  placeholder,
  inputHandler,
  value,
  valid,
  type = 'text',
}) => {
  const checkValidInput = (isValueValid: boolean): boolean | undefined => {
    if (value.length > 0) {
      return isValueValid
    }
  }

  return (
    <Form.Group as={Row} className="mb-3" controlId={controlId}>
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <Col sm="10">
        <Form.Control
          type={type}
          placeholder={placeholder}
          onChange={inputHandler}
          value={value}
          isValid={checkValidInput(valid)}
          isInvalid={checkValidInput(!valid)}
        />
      </Col>
    </Form.Group>
  );
};

export default CustomInput;
