import React, { FC } from 'react';
import { Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import routes from '../constants/routes'
import ApartmentButton from './ApartmentButton';

import '../styles/apartments.css'

interface ApartmentListItemProps {
  city: string;
  address: string;
  photos: string[];
  price: string;
  id: number;
  buttonText: string;
  buttonHandler(event: React.MouseEvent<HTMLButtonElement>, arg: number): void,
}

const ApartmentListItem: FC<ApartmentListItemProps> = ({
  city,
  address,
  photos,
  price,
  id,
  buttonText,
  buttonHandler,
}) => {
  const history = useHistory();

  const showApartmentCard = () => {
    history.push(`${routes.Apartment}/${id}`);
  };

  return (
    <div className="apartment-item" onClick={showApartmentCard}>
      <div className="apartment-list-item-photo-block">
        <Image
          src={`./assets/images/apartments-photos/${photos[0]}`}
          className="apartment-list-item-photo"
        />
      </div>
      <div className="apartment-list-item-info-block">
        <span>{city}</span>
        <span>{address}</span>
        <span>{price}</span>
        <ApartmentButton text={buttonText} buttonHandler={buttonHandler} id={id} />
      </div>
    </div>
  );
};

export default ApartmentListItem;
