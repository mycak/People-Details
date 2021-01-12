export const chceckOrder = (array, id) => {
  if (array.length) {
    if (array.length === 1) return 'onlyOne';
    if (array.length > 1) {
      if (array[0].id === id) return 'first';
      if (array[array.length - 1].id === id) {
        return 'last';
      }
      return 'inBetween';
    }
  } else return null;
};
