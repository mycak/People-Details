import React from 'react';
import styled from 'styled-components';
import SubtreeHeader from './SubtreeHeader';
import { DetailStyles } from './SingleDetail';
import SubtreeBranch from './SubtreeBranch';
import AddButton from './AddButton';
import Popup from './Popup';
import { chceckOrder } from '../utils/chceckOrder';
import { useMenageState, useMenagePopup } from '../utils/hooks';

const ShiftContainer = styled.div`
  margin-left: 6.8rem;
`;

const Subtree = ({ desc, handleDeleteTree, id, components }) => {
  const [state, handleDelete, handleAddToState] = useMenageState(components);
  const [popupIsOpen, menageOpenPopup] = useMenagePopup();
  const newId = state.length ? state[state.length - 1].id + 1 : 0;

  return (
    <DetailStyles flex="column">
      <SubtreeHeader desc={desc} handleDelete={handleDeleteTree} id={id} />
      {state.map((item, i) => (
        <SubtreeBranch
          order={chceckOrder(state, item.id)}
          id={item.id}
          desc={item.desc}
          operator="Or"
          key={i}
          kind={item.kind}
          handleDelete={handleDelete}
        />
      ))}
      <ShiftContainer>
        <AddButton
          small
          onClick={() => menageOpenPopup(true)}
          pipe={!!state.length}
        />
      </ShiftContainer>
      <Popup
        label="Add list item !"
        placeholder="Type here !"
        newId={newId}
        popupIsOpen={popupIsOpen}
        closePopup={() => menageOpenPopup(false)}
        handleAddToState={handleAddToState}
      />
    </DetailStyles>
  );
};

export default Subtree;
