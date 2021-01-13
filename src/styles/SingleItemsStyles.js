import styled from 'styled-components';

export const SingleDetailContainer = styled.div`
  min-height: 8em;
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

export const DetailStyles = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  min-height: 8em;
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
    width: 1em;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 7px 0 0 7px;
    background: var(--violetGradient);
  }
  p {
    font-size: 2em;
    margin-left: 2.5em;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 15em;
  }
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
