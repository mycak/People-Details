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

  p {
    color: rgb(75, 89, 123, 0.4);
    font-weight: 500;
    margin-right: 1em;
    font-size: 2rem;
  }
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    height: ${(props) =>
      props.isFirst ? 'calc(100% + 78px)' : 'calc(100% + 19px)'};
    top: ${(props) => (props.isFirst ? '-59px' : '0')};
    left: 100%;
    z-index: -2;
    border-left: 1px solid rgb(75, 89, 123, 0.3);
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

const Branch = ({
  operator,
  id,
  desc,
  handleDelete,
  kind,
  components,
  isFirst,
  isLast,
}) => {
  console.log(isFirst);
  return (
    <BranchStyles>
      <OperatorStyles
        className="vertical-flex-align"
        isFirst={isFirst}
        isLast={isLast}
      >
        <p>{operator}</p>
      </OperatorStyles>
      <DetailStyles>
        {kind === 'singleDetail' && (
          <SingleDetail handleDelete={handleDelete} desc={desc} id={id} />
        )}
        {kind === 'detailTree' && (
          <Subtree
            handleDelete={handleDelete}
            desc={desc}
            id={id}
            components={components}
          />
        )}
      </DetailStyles>
    </BranchStyles>
  );
};

export default Branch;
