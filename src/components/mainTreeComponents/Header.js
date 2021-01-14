import React from 'react';
import { HeaderContainerStyles } from '../../styles/HeadersStyles';

const Header = ({ text }) => (
  <HeaderContainerStyles className="vertical-flex-align">
    <p>{text}</p>
  </HeaderContainerStyles>
);

export default Header;
