import React, { FC } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

interface CustomInputProps {
  value: string,
  controlId: string,
  label: string,
  placeholder?: string,
  inputHandler: (val: React.ChangeEvent<HTMLInputElement>) => void,
  valid: boolean,
  type?: string,
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
          isValid={value.length > 1 && valid}
          isInvalid={value.length > 1 && !valid}
        />
      </Col>
    </Form.Group>
  );
};

export default CustomInput;
