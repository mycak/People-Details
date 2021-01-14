import styled from 'styled-components';

export const SingleDetailContainer = styled.div`
  min-height: 8em;
  min-width: 42.6em;
  display: flex;
  justify-content: space-between;
  padding-left: 2.5em;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 6px;
  }
  @media (max-width: 450px) {
    font-size: 5px;
  }
`;
