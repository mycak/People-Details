import React from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';

const SingleDetailContainer = styled.div`
  min-height: 80px;
`;

export const DetailStyles = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.flex === 'column'
      ? 'flex-direction: column; align-items: flex-start;'
      : ''}
  border-radius: 7px;
  box-shadow: 0 7px 23px 0 rgba(186, 184, 230, 0.31);

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 7px 0 0 7px;
    background: linear-gradient(0deg, #7176f7 0%, #ca75f1 100%);
  }
  p {
    font-size: 2rem;
    margin-left: 2.5em;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 310px;
  }
`;

const SingleDetail = ({ desc, handleDelete, id }) => (
  <SingleDetailContainer>
    <DetailStyles>
      <p>{desc}</p>
      <DeleteButton handleDelete={handleDelete} id={id} />
    </DetailStyles>
  </SingleDetailContainer>
);

export default SingleDetail;
