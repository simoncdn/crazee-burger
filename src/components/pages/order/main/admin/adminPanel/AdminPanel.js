import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../../../context/GlobalContext";
import { theme } from "../../../../../../theme";
import { getTabSelected, tabsConfig } from "../tabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(GlobalContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected.panel}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 251px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
