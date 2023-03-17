import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: false,
  setCurrentTabSelected: () => {},
  menu: [],
  setMenu: () => {},
  handleAdd: () => {},
  handleRemove: () => {},
  refreshMenu: () => {},
});
