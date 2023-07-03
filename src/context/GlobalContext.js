import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  productSelected: {},
  setProductSelected: () => {},

  newProduct: {},
  setNewProduct: () => {},

  titleEditRef: {},

  totalPrice: 0,
  setTotalPrice: () => {},

  menu: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  resetMenu: () => {},

  basketMenu: [],
  handleAddToBasket: () => {},
  handleDeleteBasketProduct: () => {},
  incrementBasketProductQuantity: () => {},

  handleProductSelected: () => {},
});
