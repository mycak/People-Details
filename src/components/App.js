import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import AddButton from './AddButton';
import Branch from './Branch';
import Header from './Header';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [state, setState] = useState([
    {
      id: 0,
      kind: 'singleDetail',
      desc: 'Age 40+',
    },
    {
      id: 1,
      kind: 'detailTree',
      desc: 'Ethncity',
    },
    {
      id: 2,
      kind: 'singleItem',
      desc: 'Income yearly 45k USD+',
    },
  ]);

  const handleDelete = useCallback(
    (i) => {
      const newState = state.filter((item) => item.id !== i);
      setState(newState);
    },
    [state]
  );

  const handleAdd = () => {
    console.log('esa');
  };

  return (
    <AppContainer>
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
      <AddButton outline handleAdd={handleAdd} pipe={!!state.length} />
    </AppContainer>
  );
}

export default App;
