import React from 'react';
import styled from 'styled-components';
import SingleDetail from './SingleDetail';

const ContainerStyles = styled.div`
  margin-top: 1.9em;
  display: flex;
  justify-content: center;
  gap: 76px;
`;
const OperatorStyles = styled.div`
  width: 150px;
  text-align: right;
  p {
    color: rgb(75, 89, 123, 0.4);
    font-weight: 500;
    margin-right: 1em;
    font-size: 2rem;
  }
`;
const DetailContainerStyles = styled.div`
  position: relative;
  width: 426px;
  height: 80px;

  //Pipes
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    height: 100px;
    top: -60px;
    left: -77px;
    z-index: -2;
    border-left: 1px solid rgb(75, 89, 123, 0.3);
  }
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 76px;
    top: 39px;
    left: -76px;
    border-top: 1px solid rgb(75, 89, 123, 0.3);
  }
`;

const Branch = ({ operator, id, desc, handleDelete, kind }) => (
  <ContainerStyles>
    <OperatorStyles className="vertical-flex-align">
      <p>{operator}</p>
    </OperatorStyles>
    <DetailContainerStyles>
      <SingleDetail handleDelete={handleDelete} desc={desc} id={id} />
    </DetailContainerStyles>
  </ContainerStyles>
);

export default Branch;
