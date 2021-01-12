import React from 'react';
import styled from 'styled-components';
import SingleDetail from './SingleDetail';
import Subtree from './Subtree';

const BranchStyles = styled.div`
  margin-top: 1.9em;
  display: flex;
  justify-content: center;
  gap: 76px;
`;
const OperatorStyles = styled.div`
  position: relative;
  width: 150px;
  text-align: right;
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    height: ${({ theme }) => theme.height};
    top: ${({ theme }) => theme.top};
    left: 100%;
    z-index: -2;
    border-left: 1px solid rgb(75, 89, 123, 0.3);
  }
  p {
    color: rgb(75, 89, 123, 0.4);
    font-weight: 500;
    font-size: 2rem;
    margin-right: 1em;
  }
`;
const DetailStyles = styled.div`
  position: relative;
  width: 426px;
  //Pipes
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 76px;
    top: 50%;
    left: -76px;
    border-top: 1px solid rgb(75, 89, 123, 0.3);
  }
`;

const themesList = {
  first: { height: 'calc(100% + 78px)', top: '-59px' },
  inBetween: { height: 'calc(100% + 19px)', top: '0' },
  last: { height: 'calc(100% + 100px)', top: '0' },
  onlyOne: { height: 'calc(100% + 108px)', top: '-68px' },
};

const Branch = ({
  operator,
  id,
  desc,
  handleDelete,
  kind,
  components,
  order,
}) => (
  <BranchStyles>
    <OperatorStyles className="vertical-flex-align" theme={themesList[order]}>
      <p>{operator}</p>
    </OperatorStyles>
    <DetailStyles>
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
    </DetailStyles>
  </BranchStyles>
);

export default Branch;
