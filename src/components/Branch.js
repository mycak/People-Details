import React from 'react';
import SingleDetail from './SingleDetail';
import Subtree from './Subtree';
import SubtreeSingleItem from './SubtreeSingleItem';
import { themes, themesListPipes } from '../utils/themes';
import {
  BranchStyles,
  OperatorStyles,
  DetailStyles,
} from '../styles/BranchStyles';

const Branch = ({
  operator,
  id,
  desc,
  handleDelete,
  kind,
  components,
  order,
}) => (
  <BranchStyles theme={themes.mainTree}>
    <OperatorStyles
      className="vertical-flex-align"
      themePipes={themesListPipes[order]}
      theme={themes.mainTree}
    >
      <p>{operator}</p>
    </OperatorStyles>
    <DetailStyles theme={themes.mainTree}>
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
    </DetailStyles>
  </BranchStyles>
);

export default Branch;
