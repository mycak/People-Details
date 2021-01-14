import styled from 'styled-components';

export const AddButtonStyles = styled.button`
  cursor: pointer;
  position: relative;
  margin-bottom: 2.5em;
  left: ${(props) => (props.small ? '4.5em' : '7.5em')};
  width: ${(props) => (props.small ? '4em' : '7em')};
  height: ${(props) => (props.small ? '4em' : '7em')};
  border-radius: 50%;
  background: var(--greenGradient);
  box-shadow: var(--shadow);
  text-align: center;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;

  //sign
  p {
    margin: 0;
    color: #fff;
    font-size: ${(props) => (props.small ? '3em' : '4.6em')};
    font-weight: 500;
  }

  //outline
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 9.6em;
    width: 9.6em;
    background-color: #ffffff;
    box-shadow: var(--shadow);
    border-radius: 50%;
    z-index: -2;
    ${(props) => (props.outline ? '' : 'display: none;')}
  }
  &:hover {
    background: #a5f68b;
  }
  @media (max-width: 800px) {
    font-size: 8px;
    left: ${(props) => (props.small ? '6.5em' : '11.5em')};
  }
  @media (max-width: 600px) {
    font-size: 6px;
  }
  @media (max-width: 450px) {
    font-size: 5px;
  }
`;

export const Oval = styled.div`
  cursor: pointer;
  align-items: center;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  margin-right: 1em;
  background: linear-gradient(180deg, #f978a2 0%, #f1435b 100%);
  box-shadow: 0 6px 12px 0 #ffc0c9;
  @media (max-width: 800px) {
    font-size: 8px;
  }
  @media (max-width: 600px) {
    font-size: 6px;
  }
  @media (max-width: 450px) {
    font-size: 5px;
  }
  &:hover {
    background: #f1435b;
  }
`;

export const Minus = styled.div`
  height: 0.4em;
  width: 1.2em;
  background-color: #ffffff;
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
