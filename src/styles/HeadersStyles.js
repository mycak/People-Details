import styled from 'styled-components';

export const HeaderContainerStyles = styled.div`
  margin-top: 4em;
  background: var(--violetGradient);
  text-align: center;
  width: 30em;
  height: 8em;
  padding: 1em;
  box-shadow: 1px 1px 19px 0px rgba(125, 118, 246, 0.7);
  border-radius: 7px;
  p {
    font-size: 2.5em;
    color: #fff;
  }
  @media (max-width: 800px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 6px;
  }
  @media (max-width: 450px) {
    font-size: 5px;
    width: 26em;
    margin-left: 2em;
  }
`;

// SUBTREE

export const SubtreeHeaderStyles = styled.div`
  margin: 1.8em 0 0 3.8em;
  display: flex;
  align-items: center;
  gap: 3.5em;
  @media (max-width: 800px) {
    font-size: 8px;
    gap: 2.1em;
  }
  @media (max-width: 600px) {
    font-size: 6px;
  }
  @media (max-width: 450px) {
    font-size: 5px;
  }
`;

export const SubtreeItemContainer = styled.div`
  width: 29em;
  min-height: 5.1em;
  border: solid 1px var(--secondary);
  border-radius: 4px;
  padding: 0.4em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 2em;
    margin-left: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 11em;
    @media (max-width: 450px) {
      max-width: 10em;
    }
  }
  @media (max-width: 800px) {
    width: 30em;
  }
  @media (max-width: 450px) {
    max-width: 28em;
  }
`;
