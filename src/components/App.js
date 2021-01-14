import React from 'react';
import styled from 'styled-components';
import AddButton from './buttons/AddButton';
import Branch from './mainTreeComponents/Branch';
import Header from './mainTreeComponents/Header';
import Popup from './Popup';
import { initialData } from '../utils/initialData';
import { useMenageState, useMenagePopup } from '../utils/hooks';
import {
  HelperContainer,
  MarginContainer,
  BranchesContainer,
} from '../styles/BranchesStyles';
import { themes } from '../utils/themes';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 4em;
`;

function App() {
  const [state, handleDelete, handleAddToState] = useMenageState(initialData);
  const [popupIsOpen, menageOpenPopup] = useMenagePopup();
  const newId = state.length ? state[state.length - 1].id + 1 : 0;

  return (
    <AppContainer>
      <Header text="People" />

      <HelperContainer>
        <MarginContainer theme={themes.mainTree} />
        <BranchesContainer theme={themes.mainTree}>
          {state.map((item, i) => (
            <Branch
              id={item.id}
              desc={item.desc}
              operator="and"
              key={i}
              kind={item.kind}
              handleDelete={handleDelete}
              components={item.components}
            />
          ))}
        </BranchesContainer>
      </HelperContainer>

      <AddButton outline onClick={() => menageOpenPopup(true)} />
      <Popup
        label="Add detail !"
        placeholder="ex origin Poland"
        popupIsOpen={popupIsOpen}
        closePopup={() => menageOpenPopup(false)}
        handleAddToState={handleAddToState}
        newId={newId}
        listItem
      />
    </AppContainer>
  );
}

export default App;
