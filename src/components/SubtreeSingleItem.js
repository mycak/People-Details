import React from 'react';
import DeleteButton from './DeleteButton';
import { SubtreeItemContainer } from './SubtreeHeader';

const SubtreeSingleItem = ({ id, desc, handleDelete }) => (
  <SubtreeItemContainer>
    <p>{desc}</p>
    <DeleteButton handleDelete={() => handleDelete(id)} />
  </SubtreeItemContainer>
);

export default SubtreeSingleItem;
