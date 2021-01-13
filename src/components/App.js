import React from 'react';
import styled from 'styled-components';
import AddButton from './AddButton';
import Branch from './Branch';
import Header from './Header';
import Popup from './Popup';
import { initialData } from '../utils/initialData';
import { chceckOrder } from '../utils/chceckOrder';
import { useMenageState, useMenagePopup } from '../utils/hooks';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 4em;
`;
const ShiftContainer = styled.div`
  margin-left: 11.5rem;
`;

function App() {
  const [state, handleDelete, handleAddToState] = useMenageState(initialData);
  const [popupIsOpen, menageOpenPopup] = useMenagePopup();
  const newId = state.length ? state[state.length - 1].id + 1 : 0;

  return (
    <AppContainer>
      <Header text="People" />
      {state.map((item, i) => (
        <Branch
          order={chceckOrder(state, item.id)}
          id={item.id}
          desc={item.desc}
          operator="And"
          key={i}
          kind={item.kind}
          handleDelete={handleDelete}
          components={item.components}
        />
      ))}
      <ShiftContainer>
        <AddButton
          outline
          pipe={!!state.length}
          onClick={() => menageOpenPopup(true)}
        />
      </ShiftContainer>
      <Popup
        label="Add detail !"
        placeholder="ex origin Poland"
        popupIsOpen={popupIsOpen}
        closePopup={() => menageOpenPopup(false)}
        handleAddToState={handleAddToState}
        newId={newId}
      />
    </AppContainer>
  );
}

export default App;
