import React from 'react';
import styled from 'styled-components';

const HeaderContainerStyles = styled.div`
  margin-top: 4em;
  margin-right: 35rem;
  background: linear-gradient(#ca75f1, #7176f7);
  text-align: center;
  width: 300px;
  height: 80px;
  padding: 10px;
  box-shadow: 1px 1px 19px 0px rgba(125, 118, 246, 0.7);
  border-radius: 7px;
  margin-bottom: 4rem;
  p {
    font-size: 2.5rem;
    color: #fff;
  }
`;
const Header = ({ text }) => (
  <HeaderContainerStyles className="vertical-flex-align">
    <p>{text}</p>
  </HeaderContainerStyles>
);

export default Header;
