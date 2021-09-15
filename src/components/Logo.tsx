import React, { FC } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/house-logo.png';
import routes from '../constants/routes';

import '../styles/header.css';

const Logo: FC = () => {
  return (
    <Link to={routes.Home}>
      <Button className="logo">
        <Image src={logo} className="logo-img" />
        <span>RealEstateTestProject</span>
      </Button>
    </Link>
  );
};

export default Logo;
