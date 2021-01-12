import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import SubtreeHeader from './SubtreeHeader';
import { DetailStyles } from './SingleDetail';
import SubtreeBranch from './SubtreeBranch';
import AddButton from './AddButton';
import Popup from './Popup';
import { chceckOrder } from '../utils/chceckOrder';

const ShiftContainer = styled.div`
  margin-left: 6.8rem;
`;

const Subtree = ({ desc, handleDelete, id, components }) => {
  const [subtreeState, setSubtreeState] = useState(components);
  const [popupIsOpen, setPopapIsOpen] = useState(false);
  const newId = subtreeState.length
    ? subtreeState[subtreeState.length - 1].id + 1
    : 0;

  const handleDeleteInSubtree = useCallback(
    (i) => {
      const newState = subtreeState.filter((item) => item.id !== i);
      setSubtreeState(newState);
    },
    [subtreeState]
  );
  const openPopup = useCallback(() => {
    setPopapIsOpen(true);
  }, []);
  const closePopup = useCallback(() => {
    setPopapIsOpen(false);
  }, []);
  const handleAdd = useCallback(
    (newDetail) => {
      setSubtreeState([...subtreeState, newDetail]);
    },
    [subtreeState]
  );

  return (
    <DetailStyles flex="column">
      <SubtreeHeader desc={desc} handleDelete={handleDelete} id={id} />
      {subtreeState.map((item, i) => (
        <SubtreeBranch
          order={chceckOrder(subtreeState, item.id)}
          id={item.id}
          desc={item.desc}
          operator="Or"
          key={i}
          kind={item.kind}
          handleDelete={handleDeleteInSubtree}
        />
      ))}
      <ShiftContainer>
        <AddButton small onClick={openPopup} pipe={!!subtreeState.length} />
      </ShiftContainer>
      <Popup
        newId={newId}
        popupIsOpen={popupIsOpen}
        closePopup={closePopup}
        handleAdd={handleAdd}
      />
    </DetailStyles>
  );
};

export default Subtree;
