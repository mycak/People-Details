import React from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';

const SubtreeHeaderStyles = styled.div`
  margin: 38px 0 8px 38px;
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const SubtreeItemContainer = styled.div`
  border: solid 2px red;
  width: 290px;
  height: 51px;
  border: solid 1px rgb(75, 89, 123, 0.3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 20px;
    margin-left: 20px;
  }
`;
const SubtreeHeader = ({ desc, id, handleDelete }) => (
  <SubtreeHeaderStyles>
    <SubtreeItemContainer>
      <p>{desc}</p>
    </SubtreeItemContainer>
    <DeleteButton handleDelete={handleDelete} id={id} />
  </SubtreeHeaderStyles>
);

export default SubtreeHeader;
