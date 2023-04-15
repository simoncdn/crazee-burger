export const deepClone = (objectToCopy) => {
  return JSON.parse(JSON.stringify(objectToCopy));
};
