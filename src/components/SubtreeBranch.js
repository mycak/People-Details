import React from 'react';
import SubtreeSingleItem from './SubtreeSingleItem';
import { themes, themesListPipesSubtree } from '../utils/themes';
import {
  BranchStyles,
  OperatorStyles,
  DetailStyles,
} from '../styles/BranchesStyles';

const SubtreeBranch = ({ operator, id, desc, handleDelete, order }) => (
  <BranchStyles theme={themes.subTree}>
    <OperatorStyles
      className="vertical-flex-align"
      themePipes={themesListPipesSubtree[order]}
      theme={themes.subTree}
    >
      <p>{operator}</p>
    </OperatorStyles>
    <DetailStyles theme={themes.subTree}>
      <SubtreeSingleItem handleDelete={handleDelete} desc={desc} id={id} />
    </DetailStyles>
  </BranchStyles>
);

export default SubtreeBranch;
