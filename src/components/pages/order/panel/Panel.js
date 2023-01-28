import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import TabsPanel from "./TabsPanel";
import WindowPanel from "./WindowPanel";

export default function Panel({ className }) {
  const { isWindowPanel, isTabIndex } = useContext(GlobalContext);

  return (
    <PanelStyled className={className}>
      <TabsPanel />
      <WindowPanel
        tabIndex={isTabIndex}
        className={isWindowPanel ? "window-panel " : "window-panel close"}
      />
    </PanelStyled>
  );
}

const PanelStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;
