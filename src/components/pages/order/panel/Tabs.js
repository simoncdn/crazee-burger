import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import PanelButton from "../../../reusable-ui/PanelButton";
import TogglePanelButton from "./TogglePanelButton";
import WindowPanel from "./WindowPanel";

export default function Tabs() {
  const { isWindowPanel, setIsWindowPanel, isTabIndex, setIsTabIndex } =
    useContext(GlobalContext);

  const tabs = [
    {
      action: "add",
      label: "Ajouter un produit",
      icon: <AiOutlinePlus className="icon" />,
    },
    {
      action: "modify",
      label: "Modifier un produit",
      icon: <MdModeEditOutline className="icon" />,
    },
  ];

  const changeTab = (action) => {
    setIsTabIndex(action);
    setIsWindowPanel(true);
  };

  return (
    <TabsPanelStyled>
      <TogglePanelButton />

      {tabs.map((tab, index) => (
        <PanelButton
          key={index}
          label={tab.label}
          Icon={tab.icon}
          className={isTabIndex === tab.action ? "" : "unactivated"}
          onClick={() => changeTab(tab.action)}
        />
      ))}

      <WindowPanel
        className={isWindowPanel ? "" : "close"}
        tabs={tabs}
        isTabIndex={isTabIndex}
      />
    </TabsPanelStyled>
  );
}

const TabsPanelStyled = styled.nav`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
  padding-left: 70px;

  &.close {
    display: none;
  }
`;
