export const filter = (id, array) => {
  return array.filter((item) => item.id !== id);
};

export const deepClone = (objectToCopy) => {
  return JSON.parse(JSON.stringify(objectToCopy));
};

export const find = (id, array) => {
  return array.find((item) => item.id === id);
};

export const getIndex = (id, array) => {
  return array.findIndex((item) => item.id === id);
};
