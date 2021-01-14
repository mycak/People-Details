import styled from 'styled-components';

export const HelperContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

export const MarginContainer = styled.div`
  width: ${({ theme }) => theme.width};
  max-height: 100%;
  border-right: 1px solid var(--secondary);
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

export const BranchesContainer = styled.div`
  padding-top: ${({ theme }) => theme.paddingTop};
  padding-bottom: ${({ theme }) => theme.paddingBottom};
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

export const BranchStyles = styled.div`
  position: relative;
  margin-top: 1.9em;
  display: flex;
  justify-content: center;
  margin-left: ${({ theme }) => theme.gap};
  .or {
    &::after {
      content: 'Or';
    }
  }

  &::after {
    content: 'And';
    position: absolute;
    display: inline-block;
    color: var(--secondary);
    font-size: 2em;
    font-weight: 500;
    top: 50%;
    left: ${({ theme }) => theme.operatorMargin};
    transform: translateY(-50%);
    z-index: -2;
  }

  @media (max-width: 800px) {
    margin-left: ${({ theme }) => theme.smallGap};
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 6px;
  }
  @media (max-width: 450px) {
    font-size: 5px;
  }
`;

export const ContainerWithoutBorder = styled.div`
  position: relative;
  //Pipes
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: ${({ theme }) => theme.gap};
    top: 50%;
    left: -${({ theme }) => theme.gap};
    border-top: 1px solid var(--secondary);
    @media (max-width: 800px) {
      width: ${({ theme }) => theme.smallGap};
      left: -${({ theme }) => theme.smallGap};
    }
  }
`;
