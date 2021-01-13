import styled from 'styled-components';

export const ModalStyles = styled.div`
  text-align: center;
  justify-content: space-around;
  h2 {
    font-size: 30px;
  }
  input[type='text'] {
    margin-top: 1em;
    text-align: center;
    box-sizing: border-box;
    width: 300px;
    height: 60px;
    padding: 12px 20px;
    font-size: 20px;
    border: 1px solid rgb(75, 89, 123, 0.3);
    color: var(--base);
    &:focus {
      outline: 1px solid rgb(75, 89, 123, 0.8);
    }
    &::placeholder {
      color: rgb(75, 89, 123, 0.6);
      font-size: 20px;
    }
  }
  button {
    display: block;
  }
`;
export const Error = styled.p`
  ${({ show }) => (show ? '' : 'visibility: hidden')};
  font-size: 1.4rem;
  color: red;
  margin-top: 0.5em;
`;
