import { useState } from "react";
import { deepClone, filter, find, getIndex } from "../utils/array";

export const useBasket = () => {
  const [basketMenu, setBasketMenu] = useState([]);

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basketMenu);
    const productAlreadyInBasket = find(productToAdd.id, basketMenu);

    if (productAlreadyInBasket) {
      incrementBasketProductQuantity(productAlreadyInBasket, basketCopy);
      return;
    }
    createNewBasketProduct(productToAdd, basketCopy);
  };

  const createNewBasketProduct = (productToAdd, basketCopy) => {
    const newBasketProduct = { id: productToAdd.id, quantity: 1 };
    const newBasketMenu = [newBasketProduct, ...basketCopy];
    return setBasketMenu(newBasketMenu);
  };

  const incrementBasketProductQuantity = (productToIncrement, basketCopy) => {
    const productIndex = getIndex(productToIncrement.id, basketMenu);
    basketCopy[productIndex].quantity += 1;
    setBasketMenu(basketCopy);
  };

  const handleDeleteBasketProduct = (idProductToRemove) => {
    const basketUpdated = filter(idProductToRemove, basketMenu);
    setBasketMenu(basketUpdated);
  };

  return {
    basketMenu,
    handleAddToBasket,
    incrementBasketProductQuantity,
    handleDeleteBasketProduct,
  };
};
