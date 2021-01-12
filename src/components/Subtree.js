import React from 'react';
import SubtreeHeader from './SubtreeHeader';
import { DetailStyles } from './SingleDetail';
import SubtreeBranch from './SubtreeBranch';

const Subtree = ({ desc, handleDelete, id, components }) => (
  <DetailStyles flex="column">
    <SubtreeHeader desc={desc} handleDelete={handleDelete} id={id} />
    {components.map((item, i) => (
      <SubtreeBranch
        id={item.id}
        desc={item.desc}
        operator="And"
        key={i}
        kind={item.kind}
        handleDelete={handleDelete}
      />
    ))}
  </DetailStyles>
);

export default Subtree;
