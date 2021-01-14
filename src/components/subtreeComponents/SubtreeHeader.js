import React from 'react';
import {
  SubtreeHeaderStyles,
  SubtreeItemContainer,
} from '../../styles/HeadersStyles';
import DeleteButton from '../buttons/DeleteButton';

const SubtreeHeader = ({ desc, id, handleDelete }) => (
  <SubtreeHeaderStyles>
    <SubtreeItemContainer>
      <p>{desc}</p>
    </SubtreeItemContainer>
    <DeleteButton handleDelete={handleDelete} id={id} />
  </SubtreeHeaderStyles>
);

export default SubtreeHeader;
