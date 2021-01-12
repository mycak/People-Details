import React from 'react';
import styled from 'styled-components';
import SubtreeSingleItem from './SubtreeSingleItem';

const BranchStyles = styled.div`
  margin-top: 1.9em;
  display: flex;
  justify-content: center;
  gap: 26px;
`;
const OperatorStyles = styled.div`
  position: relative;
  width: 88px;
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
    margin-right: 1rem;
  }
`;
const DetailStyles = styled.div`
  position: relative;
  //Pipes
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 26px;
    top: 50%;
    left: -26px;
    border-top: 1px solid rgb(75, 89, 123, 0.3);
  }
`;

const themesList = {
  first: { height: 'calc(100% + 27px)', top: '-27px' },
  inBetween: { height: 'calc(100% + 19px)', top: '-19px' },
  last: { height: 'calc(100% + 48px)', top: '-19px' },
  onlyOne: { height: 'calc(100% + 56px)', top: '-27px' },
};

const SubtreeBranch = ({
  operator,
  id,
  desc,
  handleDelete,
  order,
  // kind,
  // components,
}) => (
  <BranchStyles>
    <OperatorStyles className="vertical-flex-align" theme={themesList[order]}>
      <p>{operator}</p>
    </OperatorStyles>
    <DetailStyles>
      <SubtreeSingleItem handleDelete={handleDelete} desc={desc} id={id} />
    </DetailStyles>
  </BranchStyles>
);

export default SubtreeBranch;
