export const getIndex = (product, array) => {
  const index = array.findIndex((item) => item.id === product.id);
  return index;
};
