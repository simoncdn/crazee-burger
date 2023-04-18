import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],

  handleAdd: () => {},
  handleRemove: () => {},
  handleEdit: () => {},
  resetMenu: () => {},

  productSelected: {},
  setProductSelected: () => {},
  newProduct: {},
  setNewProduct: () => {},

  titleEditRef: {},
});
