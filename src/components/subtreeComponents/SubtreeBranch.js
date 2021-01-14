import React from 'react';
import SubtreeSingleItem from './SubtreeSingleItem';
import { themes } from '../../utils/themes';
import {
  BranchStyles,
  ContainerWithoutBorder,
} from '../../styles/BranchesStyles';

const SubtreeBranch = ({ operator, id, desc, handleDelete }) => (
  <BranchStyles theme={themes.subTree} className={operator}>
    <ContainerWithoutBorder theme={themes.subTree}>
      <SubtreeSingleItem handleDelete={handleDelete} desc={desc} id={id} />
    </ContainerWithoutBorder>
  </BranchStyles>
);

export default SubtreeBranch;
