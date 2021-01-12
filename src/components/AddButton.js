import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  cursor: pointer;
  margin-top: ${(props) => (props.small ? '2.9rem' : '4rem')};
  margin-bottom: 3rem;
  position: relative;
  width: ${(props) => (props.small ? '40px' : '70px')};
  height: ${(props) => (props.small ? '40px' : '70px')};
  border-radius: 50%;
  background: linear-gradient(0deg, #27e7e7 0%, #f4ff51 100%);
  box-shadow: 0 12px 12px 0 rgba(61, 234, 214, 0.3);
  //sign
  text-align: center;
  color: #fff;
  font-size: ${(props) => (props.small ? '30px' : '46px')};
  font-weight: 500;
  letter-spacing: 0.99px;
  line-height: 80px;
  text-shadow: 0 2px 4px 0 #12c8bf;

  //outline
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 96px;
    width: 96px;
    background-color: #ffffff;
    box-shadow: 0 12px 12px 0 rgba(61, 234, 214, 0.3);
    border-radius: 50%;
    z-index: -2;
    ${(props) => (props.outline ? '' : 'display: none;')}
  }
`;

const AddButton = ({ outline, pipe, onClick, small }) => (
  <Button
    role="button"
    outline={outline}
    pipe={pipe}
    className="vertical-flex-align"
    onClick={onClick}
    small={small}
  >
    +
  </Button>
);

export default AddButton;
