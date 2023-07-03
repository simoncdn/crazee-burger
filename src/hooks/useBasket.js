import { useEffect, useState } from "react";
import { find } from "../utils/find";
import { getIndex } from "../utils/getIndex";
import { filter } from "../utils/filter";
import { useParams } from "react-router-dom";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  const [basketMenu, setBasketMenu] = useState([]);

  const { username } = useParams();
  const stored = JSON.parse(localStorage.getItem(username)) || [];

  const addProductToBasket = (productToAdd) => {
    const basketCopy = deepClone(basketMenu);
    const productAlreadyInBasket = find(productToAdd.id, basketMenu);

    if (!productAlreadyInBasket) {
      productToAdd.quantity = 1;
      const newBasketMenu = [productToAdd, ...basketCopy];
      setBasketMenu(newBasketMenu);
      localStorage.setItem(username, JSON.stringify(newBasketMenu));
      return;
    }
    updateProductQuantity(productAlreadyInBasket);
  };

  useEffect(() => {
    setBasketMenu(JSON.parse(localStorage.getItem(username)) || []);

    if (stored.length === 0) {
      localStorage.setItem(username, JSON.stringify(basketMenu));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editProductToBasket = (productToEdit) => {
    const productInBasket = getIndex(productToEdit.id, basketMenu);

    basketMenu[productInBasket] = productToEdit;

    setBasketMenu(basketMenu);
    localStorage.setItem(username, JSON.stringify(basketMenu));
  };

  const updateProductQuantity = (productToUpdate) => {
    const basketCopy = deepClone(basketMenu);
    const productIndex = getIndex(productToUpdate.id, basketMenu);

    basketCopy[productIndex].quantity += 1;

    setBasketMenu(basketCopy);
    localStorage.setItem(username, JSON.stringify(basketCopy));
  };

  const deleteBasketProduct = (idProductToRemove) => {
    const basketUpdated = filter(idProductToRemove, basketMenu);

    localStorage.setItem(username, JSON.stringify(basketUpdated));
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
