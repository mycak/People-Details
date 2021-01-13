import { useCallback, useState } from 'react';

export const useMenageState = (data) => {
  const [state, setState] = useState(data || []);
  const handleDelete = useCallback(
    (i) => {
      const newState = state.filter((item) => item.id !== i);
      setState(newState);
    },
    [state]
  );
  const handleAddToState = useCallback(
    (newDetail) => {
      setState([...state, newDetail]);
    },
    [state]
  );
  return [state, handleDelete, handleAddToState];
};

export const useMenagePopup = () => {
  const [popupIsOpen, setPopapIsOpen] = useState(false);
  const menageOpenPopup = useCallback((shouldOpen) => {
    if (shouldOpen === true) setPopapIsOpen(true);
    if (shouldOpen === false) setPopapIsOpen(false);
  }, []);
  return [popupIsOpen, menageOpenPopup];
};
