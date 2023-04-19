import { deepClone } from "./deepClone";

export const filterArray = (productId, arrayToFilter) => {
  const arrayCopy = deepClone(arrayToFilter);
  const arrayFiltered = arrayCopy.filter((product) => product.id !== productId);
  return arrayFiltered;
};
