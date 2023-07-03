import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, filter, getIndex } from "../utils/array";

export const useMenu = (products) => {
  const [menu, setMenu] = useState(products || []);

  const handleAdd = (productToAdd) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [productToAdd, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleDelete = (idProductToRemove) => {
    const menuUpdated = filter(idProductToRemove, menu);
    setMenu(menuUpdated);
  };

  const handleEdit = (productToEdit) => {
    const productTobeEdited = getIndex(productToEdit.id, menu);
    menu[productTobeEdited] = productToEdit;
    setMenu(menu);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  return { handleAdd, handleDelete, handleEdit, resetMenu, menu };
};
