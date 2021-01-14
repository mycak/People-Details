import styled from 'styled-components';

export const BranchStyles = styled.div`
  margin-top: 1.9em;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gap};
  @media (max-width: 800px) {
    gap: ${({ theme }) => (theme.gap === '7.6em' ? '3.8em' : '1.3em')};
    font-size: 8px;
  }
  @media (max-width: 600px) {
    gap: ${({ theme }) => (theme.gap === '7.6em' ? '3.8em' : '1.3em')};
    font-size: 6px;
  }
  @media (max-width: 450px) {
    gap: ${({ theme }) => (theme.gap === '7.6em' ? '3.8em' : '1.3em')};
    font-size: 5px;
  }
`;
export const OperatorStyles = styled.div`
  position: relative;
  min-width: ${({ theme }) => theme.width};
  text-align: right;
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    height: ${({ themePipes }) => themePipes.height};
    top: ${({ themePipes }) => themePipes.top};
    left: 100%;
    z-index: -2;
    border-left: 1px solid var(--secondary);
  }
  p {
    color: rgb(75, 89, 123, 0.4);
    font-weight: 500;
    font-size: 2em;
    margin-right: 0.5em;
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
export const DetailStyles = styled.div`
  position: relative;
  ${({ theme }) => (theme.widthDetail ? 'width: 426px' : '')};
  //Pipes
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: ${({ theme }) => theme.widthPipe};
    top: 50%;
    left: ${({ theme }) => theme.left};
    border-top: 1px solid var(--secondary);
    @media (max-width: 800px) {
      width: ${({ theme }) => (theme.gap === '7.6em' ? '3.8em' : '1.3em')};
      left: ${({ theme }) => (theme.gap === '7.6em' ? '-3.8em' : '-1.3em')};
    }
  }
  @media (max-width: 800px) {
    width: calc(0.8 * 426px);
  }
  @media (max-width: 600px) {
    width: calc(0.6 * 426px);
  }
  @media (max-width: 450px) {
    width: calc(0.45 * 426px);
  }
`;
