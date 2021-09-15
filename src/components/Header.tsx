import React, { FC } from 'react';
import Logo from './Logo';
import Authentication from './Authentication';

import '../styles/header.css';

const Header: FC = () => (
  <div className="header">
    <Logo />
    <Authentication />
  </div>
);

export default Header;
