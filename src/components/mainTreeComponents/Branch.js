import React from 'react';
import SingleDetail from './SingleDetail';
import Subtree from '../subtreeComponents/Subtree';
import SubtreeSingleItem from '../subtreeComponents/SubtreeSingleItem';
import { themes, themesListPipes } from '../../utils/themes';
import { BranchStyles, OperatorStyles } from '../../styles/BranchesStyles';
import ContainerWithBorder from '../ContainerWithBorder';

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
