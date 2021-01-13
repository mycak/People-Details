import React from 'react';
import DeleteButton from './DeleteButton';

import {
  SingleDetailContainer,
  DetailStyles,
} from '../styles/SingleItemsStyles';

const SingleDetail = ({ desc, handleDelete, id }) => (
  <SingleDetailContainer>
    <DetailStyles>
      <p>{desc}</p>
      <DeleteButton handleDelete={handleDelete} id={id} />
    </DetailStyles>
  </SingleDetailContainer>
);

export default SingleDetail;
