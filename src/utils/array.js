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

export const isEmpty = (array) => {
  return array.length === 0;
}
export const removeObjectById = (idOfItemToRemove, array) => {
  return array.filter((item) => item.id !== idOfItemToRemove)
}

export const findObjectById = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id)
}