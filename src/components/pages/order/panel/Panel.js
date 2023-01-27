import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import TabsPanel from "./TabsPanel";
import WindowPanel from "./WindowPanel";

export default function Panel({ className }) {
  const { windowPanel } = useContext(GlobalContext);
  const { tabIndex } = useContext(GlobalContext);

  return (
    <PanelStyled className={className}>
      <TabsPanel />
      <WindowPanel
        tabIndex={tabIndex}
        className={windowPanel ? "window-panel " : "window-panel close"}
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
