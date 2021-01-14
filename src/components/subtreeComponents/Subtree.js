import React from 'react';
import SubtreeHeader from './SubtreeHeader';
import SubtreeBranch from './SubtreeBranch';
import AddButton from '../buttons/AddButton';
import Popup from '../Popup';
import { useMenageState, useMenagePopup } from '../../utils/hooks';
import {
  HelperContainer,
  MarginContainer,
  BranchesContainer,
} from '../../styles/BranchesStyles';
import { themes } from '../../utils/themes';

const Subtree = ({ desc, handleDeleteTree, id, components }) => {
  const [state, handleDelete, handleAddToState] = useMenageState(components);
  const [popupIsOpen, menageOpenPopup] = useMenagePopup();
  const newId = state.length ? state[state.length - 1].id + 1 : 0;

  return (
    <div>
      <SubtreeHeader desc={desc} handleDelete={handleDeleteTree} id={id} />
      <HelperContainer>
        <MarginContainer theme={themes.subTree} />
        <BranchesContainer theme={themes.subTree}>
          {!!state.length &&
            state.map((item, i) => (
              <SubtreeBranch
                id={item.id}
                desc={item.desc}
                operator="or"
                key={i}
                kind={item.kind}
                handleDelete={handleDelete}
              />
            ))}
        </BranchesContainer>
      </HelperContainer>
      <AddButton small onClick={() => menageOpenPopup(true)} />
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
