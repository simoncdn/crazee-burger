import React, { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Tab from "../../../../reusable-ui/Tab";
import GlobalContext from "../../../../../context/GlobalContext";
import { tabsConfig } from "./tabsConfig";
import { theme } from "../../../../../theme";

export default function AdmninTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(GlobalContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); // ouvre moi le panel dans tous les cas
    setCurrentTabSelected(tabSelected); // réactualise l'onglet sélectionné
  };

  const tabs = tabsConfig;

  // affichage
  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={
            tab.index === "chevronUpDown"
              ? () => setIsCollapsed(!isCollapsed)
              : () => selectTab(tab.index)
          }
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.nav`
  display: flex;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    border-bottom: 1px;
  }

  button {
    margin-left: 1px;
  }
`;
