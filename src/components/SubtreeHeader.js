import React from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';

const SubtreeHeaderStyles = styled.div`
  margin: 38px 0 38px 38px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SeubtreeItemContainer = styled.div`
  width: 293px;
  height: 51px;
  border: solid 1px rgb(75, 89, 123, 0.3);
  border-radius: 4px;
  p {
    font-size: 2rem;
    margin-left: 2rem;
  }
`;
const SubtreeHeader = ({ desc, id, handleDelete }) => (
  <SubtreeHeaderStyles>
    <SeubtreeItemContainer className="vertical-flex-align">
      <p>{desc}</p>
    </SeubtreeItemContainer>
    <DeleteButton handleDelete={handleDelete} id={id} />
  </SubtreeHeaderStyles>
);

export default SubtreeHeader;
