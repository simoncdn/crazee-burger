export const filter = (id, array) => {
  return array.filter((item) => item.id !== id);
};
