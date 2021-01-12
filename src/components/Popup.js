import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import AddButton from './AddButton';

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

function Popup({ popupIsOpen, closePopup, handleAdd, newId }) {
  const [detail, setDetail] = useState({
    id: '',
    kind: 'singleDetail',
    desc: '',
  });

  return (
    <div>
      <Modal
        isOpen={popupIsOpen}
        onRequestClose={() => {
          setDetail({
            id: '',
            kind: 'singleItem',
            desc: '',
          });
          closePopup();
        }}
        contentLabel="Add detail"
        className="Modal"
      >
        <ModalStyles className="container">
          <h2>Add detail !</h2>
          <input
            type="text"
            placeholder="ex Origin Poland"
            value={detail.desc}
            onChange={(e) =>
              setDetail({ ...detail, desc: e.target.value, id: newId })
            }
          />
          <AddButton
            onClick={() => {
              handleAdd(detail);
              setDetail({
                id: '',
                kind: 'singleItem',
                desc: '',
              });
              closePopup();
            }}
          />
        </ModalStyles>
      </Modal>
    </div>
  );
}

export default Popup;
