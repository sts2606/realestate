import React, { FC } from 'react';
import Logo from './Logo';
import Authentification from './Authentification';

import '../styles/header.css';

const Header: FC = () => (
  <div className="header">
    <Logo />
    <Authentification />
  </div>
);

export default Header;
