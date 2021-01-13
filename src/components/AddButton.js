import React from 'react';
import { AddButtonStyles } from '../styles/ButtonsStyles';

const AddButton = ({ outline, pipe, onClick, small }) => (
  <AddButtonStyles
    role="button"
    outline={outline}
    pipe={pipe}
    className="vertical-flex-align"
    onClick={onClick}
    small={small}
  >
    +
  </AddButtonStyles>
);

export default AddButton;
