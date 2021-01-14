import React from 'react';
import DeleteButton from '../buttons/DeleteButton';
import { SubtreeItemContainer } from '../../styles/HeadersStyles';

const SubtreeSingleItem = ({ id, desc, handleDelete }) => (
  <SubtreeItemContainer>
    <p>{desc}</p>
    <DeleteButton handleDelete={() => handleDelete(id)} />
  </SubtreeItemContainer>
);

export default SubtreeSingleItem;
