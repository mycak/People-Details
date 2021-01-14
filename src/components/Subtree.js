import React from 'react';
import SubtreeHeader from './SubtreeHeader';
import SubtreeBranch from './SubtreeBranch';
import AddButton from './AddButton';
import Popup from './Popup';
import { chceckOrder } from '../utils/chceckOrder';
import { useMenageState, useMenagePopup } from '../utils/hooks';

const Subtree = ({ desc, handleDeleteTree, id, components }) => {
  const [state, handleDelete, handleAddToState] = useMenageState(components);
  const [popupIsOpen, menageOpenPopup] = useMenagePopup();
  const newId = state.length ? state[state.length - 1].id + 1 : 0;

  return (
    <div>
      <SubtreeHeader desc={desc} handleDelete={handleDeleteTree} id={id} />
      {state.length &&
        state.map((item, i) => (
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
      <AddButton
        className="margin--zero"
        small
        onClick={() => menageOpenPopup(true)}
        pipe={!!state.length}
      />
      <Popup
        label="Add list item !"
        placeholder="Type here !"
        newId={newId}
        popupIsOpen={popupIsOpen}
        closePopup={() => menageOpenPopup(false)}
        handleAddToState={handleAddToState}
        listItem={false}
      />
    </div>
  );
};

export default Subtree;
