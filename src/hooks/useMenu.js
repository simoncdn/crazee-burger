import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { filter } from "../utils/filter";
import { getIndex } from "../utils/getIndex";
import { deepClone } from "../utils/array";

export const useMenu = (product) => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAdd = (productToAdd) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [product, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleRemove = (idProductToRemove) => {
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

  return { handleAdd, handleRemove, handleEdit, resetMenu, menu };
};
