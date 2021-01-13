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
  listItem,
}) {
  const [detail, setDetail] = useState(mainTreeStructure);
  const [isErrorShown, setIsErrorShown] = useState(false);

  const handleAdd = () => {
    if (detail.desc) {
      handleAddToState(detail);
      setDetail({
        id: newId,
        kind: 'singleDetail',
        desc: '',
      });
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
        <ModalStyles className="container" listItem={listItem}>
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
          {listItem && (
            <label htmlFor="itemList">
              Details list
              <input
                type="checkbox"
                id="itemList"
                onChange={(e) => {
                  const newKind = e.target.checked
                    ? 'detailTree'
                    : 'singleDetail';
                  setDetail({ ...detail, kind: newKind });
                }}
              />
            </label>
          )}

          <Error show={isErrorShown}>You must type something</Error>
          <AddButton onClick={() => handleAdd()} />
        </ModalStyles>
      </Modal>
    </div>
  );
}

export default Popup;
