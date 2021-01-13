import styled from 'styled-components';

export const HeaderContainerStyles = styled.div`
  margin-top: 4em;
  margin-right: 35rem;
  background: linear-gradient(#ca75f1, #7176f7);
  text-align: center;
  width: 300px;
  height: 80px;
  padding: 10px;
  box-shadow: 1px 1px 19px 0px rgba(125, 118, 246, 0.7);
  border-radius: 7px;
  margin-bottom: 4rem;
  p {
    font-size: 2.5rem;
    color: #fff;
  }
`;

// SUBTREE

export const SubtreeHeaderStyles = styled.div`
  margin: 38px 0 8px 38px;
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const SubtreeItemContainer = styled.div`
  border: solid 2px red;
  width: 290px;
  min-height: 51px;
  border: solid 1px rgb(75, 89, 123, 0.3);
  border-radius: 4px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 20px;
    margin-left: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }
`;
