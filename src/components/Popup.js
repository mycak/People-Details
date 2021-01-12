import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import AddButton from './AddButton';
import { mainTreeStructure } from '../utils/treeStructures';

Modal.setAppElement('#root');

const ModalStyles = styled.div`
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
const Error = styled.p`
  ${({ show }) => (show ? '' : 'visibility: hidden')};
  font-size: 1.4rem;
  color: red;
  margin-top: 0.5em;
`;

function Popup({
  popupIsOpen,
  closePopup,
  handleAddToState,
  newId,
  label,
  placeholder,
}) {
  const [detail, setDetail] = useState(mainTreeStructure);
  const [isErrorShown, setIsErrorShown] = useState(false);

  const handleAdd = () => {
    if (detail.desc) {
      setDetail({
        id: newId,
        kind: 'singleDetail',
        desc: '',
      });
      handleAddToState(detail);
      setIsErrorShown(false);
      closePopup();
    } else setIsErrorShown(true);
  };

  return (
    <div>
      <Modal
        isOpen={popupIsOpen}
        onRequestClose={() => {
          setDetail(mainTreeStructure);
          closePopup();
        }}
        contentLabel="Add detail"
        className="Modal"
      >
        <ModalStyles className="container">
          <h2>{label}</h2>
          <input
            type="text"
            placeholder={placeholder}
            value={detail.desc}
            onChange={(e) =>
              setDetail({ ...detail, desc: e.target.value, id: newId })
            }
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleAdd();
            }}
          />
          <Error show={isErrorShown}>You must type something</Error>
          <AddButton onClick={() => handleAdd()} />
        </ModalStyles>
      </Modal>
    </div>
  );
}

export default Popup;
