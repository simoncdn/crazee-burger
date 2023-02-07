import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import PanelButton from "../../../reusable-ui/PanelButton";
import TogglePanelButton from "./TogglePanelButton";

export default function Tabs({ tabs }) {
  const { setIsWindowPanel, isTabIndex, setIsTabIndex } =
    useContext(GlobalContext);

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
    </TabsPanelStyled>
  );
}

const TabsPanelStyled = styled.nav`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
  padding-left: 70px;
`;
