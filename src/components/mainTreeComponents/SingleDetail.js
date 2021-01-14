import React from 'react';
import DeleteButton from '../buttons/DeleteButton';

import { SingleDetailContainer } from '../../styles/SingleItemsStyles';

const SingleDetail = ({ desc, handleDelete, id }) => (
  <SingleDetailContainer>
    <p>{desc}</p>
    <DeleteButton handleDelete={handleDelete} id={id} />
  </SingleDetailContainer>
);

export default SingleDetail;
