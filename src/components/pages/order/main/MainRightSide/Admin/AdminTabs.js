import React, { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Tab from "../../../../../reusable-ui/Tab";
import GlobalContext from "../../../../../../context/GlobalContext";
import { tabsConfig } from "./tabsConfig";
import { theme } from "../../../../../../theme";
import { focusOnRef } from "../../../../../../utils/focusOnRef";

export default function AdmninTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    titleEditRef,
  } = useContext(GlobalContext);

  const selectTab = async (tabSelected) => {
    await setIsCollapsed(false); // ouvre moi le panel dans tous les cas
    await setCurrentTabSelected(tabSelected); // réactualise l'onglet sélectionné
    focusOnRef(titleEditRef);
  };

  const onCollapseClick = async () => {
    await setIsCollapsed(!isCollapsed);
    focusOnRef(titleEditRef);
  };

  const tabs = tabsConfig();

  // affichage
  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => onCollapseClick()}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.nav`
  display: flex;
  position: absolute;
  top: -43px;
  left: 5%;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
