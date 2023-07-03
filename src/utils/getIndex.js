export const getIndex = (id, array) => {
  return array.findIndex((item) => item.id === id);
};
