import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},
  isWindowPanel: true,
  setIsWindowPanel: () => {},
  isTabIndex: 0,
  setIsTabIndex: () => {},
});
