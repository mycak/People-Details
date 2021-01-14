import styled from 'styled-components';

export const SingleDetailContainer = styled.div`
  min-height: 8em;
  min-width: 42.6em;
  display: flex;
  justify-content: space-between;
  padding-left: 3em;
  align-items: center;
  p {
    font-size: 2em;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 17em;
    @media (max-width: 450px) {
      max-width: 15em;
    }
  }
  @media (max-width: 800px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 6px;
  }
  @media (max-width: 450px) {
    min-width: 40em;
    font-size: 5px;
  }
`;
