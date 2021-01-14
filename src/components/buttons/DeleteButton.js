import React from 'react';
import { Oval, Minus } from '../../styles/ButtonsStyles';

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
