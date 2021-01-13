import styled from 'styled-components';

export const BranchStyles = styled.div`
  margin-top: 1.9em;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gap};
`;
export const OperatorStyles = styled.div`
  position: relative;
  width: ${({ theme }) => theme.width};
  text-align: right;
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    height: ${({ themePipes }) => themePipes.height};
    top: ${({ themePipes }) => themePipes.top};
    left: 100%;
    z-index: -2;
    border-left: 1px solid rgb(75, 89, 123, 0.3);
  }
  p {
    color: rgb(75, 89, 123, 0.4);
    font-weight: 500;
    font-size: 2rem;
    margin-right: 1em;
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
    border-top: 1px solid rgb(75, 89, 123, 0.3);
  }
`;
