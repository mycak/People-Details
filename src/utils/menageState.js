export const handleDelete = useCallback(
  (i) => {
    const newState = state.filter((item) => item.id !== i);
    setState(newState);
  },
  [state]
);
