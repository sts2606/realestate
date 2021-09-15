import React, { FC } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { IApartment } from './interfaces';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import successMark from '../assets/images/sucess-icon.png';
import errorMark from '../assets/images/error-icon.png';
import { addNewUserApartment } from '../actions/user.actions';

import '../styles/apartments.css';

const ApartmentCard: FC = () => {
  const location: string[] = useLocation().pathname.split('/');
  const id: number = Number(location[location.length - 1]);
  const apartments: IApartment[] = useSelector((state: RootState) => state.app.apartments);
  const apartment = apartments ? apartments.find((item) => item.id === id) : null;
  const dispatch = useDispatch();
  const reserveHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addNewUserApartment(id));
  };
  return (
    <>
      <Header />
      {apartment ? (
        <div className="apartment-card">
          <Carousel>
            {apartment.photos.map((photo) => (
              <Carousel.Item key={photo}>
                <img
                  className="d-block w-100 apartment-list-item-photo"
                  src={`/assets/images/apartments-photos/${photo}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="apartment-description">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Address</th>
                  <th>Bedrooms</th>
                  <th>TV</th>
                  <th>Air conditioning</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{apartment.city}</th>
                  <th>{apartment.address}</th>
                  <th>{apartment.bedroomsCount}</th>
                  <th>
                    <img
                      src={apartment.TV ? successMark : errorMark}
                      alt="icon"
                      className="apartment-check-icon"
                    />
                  </th>
                  <th>
                    <img
                      src={apartment.airСonditioning ? successMark : errorMark}
                      alt="icon"
                      className="apartment-check-icon"
                    />
                  </th>
                  <th>{apartment.price}</th>
                  <th>
                    <Button type="button" size="sm" onClick={reserveHandler}>
                      Reserve
                    </Button>
                  </th>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ApartmentCard;
