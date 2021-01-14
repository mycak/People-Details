import React from 'react';
import styled from 'styled-components';

const ContainerWithBorderStyles = styled.div`
  position: relative;
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
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 7.6em;
    top: 50%;
    left: -7.6em;
    border-top: 1px solid var(--secondary);
    @media (max-width: 800px) {
      width: 3.8em;
      left: -3.8em;
    }
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

const ContainerWithBorder = ({ children, theme }) => (
  <ContainerWithBorderStyles theme={theme}>
    {children}
  </ContainerWithBorderStyles>
);

export default ContainerWithBorder;
