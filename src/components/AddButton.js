import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-right: 35rem;
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(0deg, #27e7e7 0%, #f4ff51 100%);
  box-shadow: 0 12px 12px 0 rgba(61, 234, 214, 0.3);
  //sign
  text-align: center;
  color: #fff;
  font-size: 46px;
  font-weight: 600;
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

  //pipe
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    height: 80px;
    top: -80px;
    left: 33px;
    z-index: -2;
    border-left: 1px solid rgb(75, 89, 123, 0.3);
    ${(props) => (props.pipe ? '' : 'display: none;')}
  }
`;

const AddButton = ({ outline, pipe, handleAdd }) => (
  <Button outline={outline} pipe={pipe} className="vertical-flex-align">
    +
  </Button>
);

export default AddButton;
