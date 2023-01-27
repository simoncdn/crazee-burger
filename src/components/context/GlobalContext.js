import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},
  windowPanel: true,
  setWindowPanel: () => {},
  tabIndex: 0,
  SetTabIndex: () => {},
});
