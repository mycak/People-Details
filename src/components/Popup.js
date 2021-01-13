import React, { useState } from 'react';
import Modal from 'react-modal';

import AddButton from './AddButton';
import { mainTreeStructure } from '../utils/treeStructures';
import { ModalStyles, Error } from '../styles/PopupStyles';

Modal.setAppElement('#root');

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
