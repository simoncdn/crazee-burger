import { useState } from "react";
import { filter } from "../utils/filter";
import { getIndex } from "../utils/getIndex";
import { deepClone } from "../utils/array";
import { syncBothMenu } from "../api/product";

export const useMenu = () => {
  const [menu, setMenu] = useState();

  const handleAdd = (userId, productToAdd) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [productToAdd, ...menuCopy];
    setMenu(menuUpdated);
    syncBothMenu(userId, menuUpdated);
  };

  const handleRemove = (userId, idProductToRemove) => {
    const menuUpdated = filter(idProductToRemove, menu);
    setMenu(menuUpdated);
    syncBothMenu(userId, menuUpdated);
  };

  const handleEdit = (userId, productToEdit) => {
    const productTobeEdited = getIndex(productToEdit.id, menu);
    menu[productTobeEdited] = productToEdit;
    setMenu(menu);
    syncBothMenu(userId, menu);
  };

  const resetMenu = (userId, newMenu) => {
    setMenu(newMenu);
    syncBothMenu(userId, newMenu);
  };

  return { handleAdd, handleRemove, setMenu, handleEdit, resetMenu, menu };
};
