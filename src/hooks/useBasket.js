import { useState } from "react";
import { find } from "../utils/find";
import { deepClone } from "../utils/deepClone";
import { getIndex } from "../utils/getIndex";
import { filter } from "../utils/filter";

export const useBasket = () => {
  const [basketMenu, setBasketMenu] = useState([]);

  const addProductToBasket = (productToAdd) => {
    const basketCopy = deepClone(basketMenu);
    const productAlreadyInBasket = find(productToAdd.id, basketMenu);

    if (!productAlreadyInBasket) {
      productToAdd.quantity = 1;
      const newBasketMenu = [productToAdd, ...basketCopy];
      setBasketMenu(newBasketMenu);
      return;
    }
    updateProductQuantity(productAlreadyInBasket);
  };

  const editProductToBasket = (productToEdit) => {
    const productInBasket = getIndex(productToEdit.id, basketMenu);
    basketMenu[productInBasket] = productToEdit;
    setBasketMenu(basketMenu);
  };

  const updateProductQuantity = (productToUpdate) => {
    const basketCopy = deepClone(basketMenu);
    const productIndex = getIndex(productToUpdate.id, basketMenu);
    basketCopy[productIndex].quantity += 1;
    setBasketMenu(basketCopy);
  };

  const deleteBasketProduct = (idProductToRemove) => {
    const basketUpdated = filter(idProductToRemove, basketMenu);
    setBasketMenu(basketUpdated);
  };

  return {
    basketMenu,
    addProductToBasket,
    updateProductQuantity,
    deleteBasketProduct,
    editProductToBasket,
  };
};
