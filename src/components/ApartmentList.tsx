import React, { FC } from 'react';
import ApartmentListItem from './ApartmentListItem';
import { IApartment } from './interfaces';

interface ApartmentListProps {
  apartments: IApartment[],
  buttonText: string,
  buttonHandler(event: React.MouseEvent<HTMLButtonElement>, id: number): void,
}

const ApartmentList: FC<ApartmentListProps> = ({ apartments, buttonText, buttonHandler }) => {
  return (
    <div>
      {apartments.map((apartment) => {
        return (
          <ApartmentListItem
            key={apartment.id}
            city={apartment.city}
            address={apartment.address}
            price={apartment.price}
            photos={apartment.photos}
            id={apartment.id}
            buttonText={buttonText}
            buttonHandler={buttonHandler}
          />
        );
      })}
    </div>
  );
};

export default ApartmentList;
