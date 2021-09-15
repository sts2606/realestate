import React, { FC } from 'react';
import { Button } from 'react-bootstrap';

interface ApartmentButtonProps {
  text: string,
  id: number,
  buttonHandler(event: React.MouseEvent<HTMLButtonElement>, arg: number): void,
}

const ApartmentButton: FC<ApartmentButtonProps> = ({ text, buttonHandler, id }) => {
  return (
    <Button type="button" onClick={(event) => buttonHandler(event, id)}>
      {text}
    </Button>
  );
};

export default ApartmentButton;
