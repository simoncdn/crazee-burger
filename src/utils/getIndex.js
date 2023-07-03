export const getIndex = (id, array) => {
  const index = array.findIndex((item) => item.id === id);
  return index;
};
