import styled from 'styled-components';

export const ModalStyles = styled.div`
  text-align: center;
  justify-content: space-around;
  h2 {
    font-size: 3em;
  }
  input[type='text'] {
    font-size: 2em;
    margin-top: 1em;
    text-align: center;
    box-sizing: border-box;
    width: 15em;
    height: 3em;
    padding: 0.6em 1em;
    font-weight: 700;
    border: 1px solid rgb(75, 89, 123, 0.3);
    color: var(--base);
    &:focus {
      outline: 1px solid rgb(75, 89, 123, 0.8);
    }
    &::placeholder {
      color: rgb(75, 89, 123, 0.6);
      font-size: 1em;
    }
  }
  label {
    margin: 1em 0;
    display: flex;
    align-items: center;
    font-size: 1.4em;
  }
  button {
    display: flex;
    margin: 1.5em 0;
    left: 0;
  }
  @media (max-width: 800px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 6px;
  }
`;
export const Error = styled.p`
  ${({ show }) => (show ? '' : 'visibility: hidden')};
  font-size: 1.4rem;
  color: red;
  margin-top: 0.5em;
  @media (max-width: 800px) {
    font-size: 9px;
  }
`;
