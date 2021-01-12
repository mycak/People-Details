import React from 'react';
import styled from 'styled-components';

const Oval = styled.div`
  cursor: pointer;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 1em;
  background: linear-gradient(180deg, #f978a2 0%, #f1435b 100%);
  box-shadow: 0 6px 12px 0 #ffc0c9;
`;
const Minus = styled.div`
  height: 4px;
  width: 12px;
  background-color: #ffffff;
`;
const DeleteButton = ({ handleDelete, id }) => (
  <Oval
    className="vertical-flex-align"
    role="button"
    onClick={() => handleDelete(id)}
  >
    <Minus role="button" onClick={() => handleDelete(id)} />
  </Oval>
);

export default DeleteButton;
