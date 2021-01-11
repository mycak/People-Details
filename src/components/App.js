import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton';
import Branch from './Branch';
import Header from './Header';
import Popup from './Popup';
import { initialData } from '../utils/initialData';

const ShiftContainer = styled.div`
  margin-left: -35rem;
`;

function App() {
  const [state, setState] = useState(initialData);
  const [popupIsOpen, setPopapIsOpen] = useState(false);
  const newId = state.length ? state[state.length - 1].id + 1 : 0;
  console.log(newId);

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
    <div className="container">
      <Header text="People" />
      {state.map((item, i) => (
        <Branch
          id={item.id}
          desc={item.desc}
          operator="And"
          key={i}
          kind={item.kind}
          handleDelete={handleDelete}
        />
      ))}
      <ShiftContainer>
        <AddButton
          outline
          handleAdd={handleAdd}
          pipe={!!state.length}
          onClick={openPopup}
        />
      </ShiftContainer>
      <Popup
        popupIsOpen={popupIsOpen}
        closePopup={closePopup}
        handleAdd={handleAdd}
        newId={newId}
      />
    </div>
  );
}

export default App;
