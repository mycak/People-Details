import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton';
import Branch from './Branch';
import Header from './Header';
import Popup from './Popup';
import { initialData } from '../utils/initialData';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 35rem;
`;
const ShiftContainer = styled.div`
  margin-left: 11.5rem;
`;

function App() {
  const [state, setState] = useState(initialData);
  const [popupIsOpen, setPopapIsOpen] = useState(false);
  const newId = state.length ? state[state.length - 1].id + 1 : 0;
  const firstId = state.length ? state[0].id : null;
  const lastId = state.length ? state[state.length - 1].id : null;

  const handleDelete = useCallback(
    (i) => {
      const newState = state.filter((item) => item.id !== i);
      setState(newState);
    },
    [state]
  );
  const closePopup = useCallback(() => {
    setPopapIsOpen(false);
  }, []);
  const openPopup = useCallback(() => {
    setPopapIsOpen(true);
  }, []);
  const handleAdd = useCallback(
    (newDetail) => {
      setState([...state, newDetail]);
    },
    [state]
  );

  return (
    <AppContainer>
      <Header text="People" />
      {state.map((item, i) => (
        <Branch
          isFirst={firstId === item.id}
          isLast={lastId === item.id}
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
        <AddButton outline pipe={!!state.length} onClick={openPopup} />
      </ShiftContainer>
      <Popup
        popupIsOpen={popupIsOpen}
        closePopup={closePopup}
        handleAdd={handleAdd}
        newId={newId}
      />
    </AppContainer>
  );
}

export default App;
