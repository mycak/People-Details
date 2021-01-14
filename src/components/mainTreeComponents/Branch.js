import React from 'react';
import SingleDetail from './SingleDetail';
import Subtree from '../subtreeComponents/Subtree';
import SubtreeSingleItem from '../subtreeComponents/SubtreeSingleItem';
import { themes } from '../../utils/themes';
import { BranchStyles } from '../../styles/BranchesStyles';
import ContainerWithBorder from './ContainerWithBorder';

const Branch = ({ operator, id, desc, handleDelete, kind, components }) => (
  <BranchStyles theme={themes.mainTree} className={operator}>
    <ContainerWithBorder theme={themes.mainTree}>
      {kind === 'singleDetail' && (
        <SingleDetail handleDelete={handleDelete} desc={desc} id={id} />
      )}
      {kind === 'detailTree' && (
        <Subtree
          handleDeleteTree={handleDelete}
          desc={desc}
          id={id}
          components={components}
        />
      )}
      {kind === 'detailSubtree' && (
        <SubtreeSingleItem handleDelete={handleDelete} desc={desc} id={id} />
      )}
    </ContainerWithBorder>
  </BranchStyles>
);

export default Branch;
