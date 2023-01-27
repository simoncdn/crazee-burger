import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import GlobalContext from "../../context/GlobalContext";
import { useState } from "react";

export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [windowPanel, setWindowPanel] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);

  const adminContextValue = {
    isAdminMode,
    setIsAdminMode,
    windowPanel,
    setWindowPanel,
    tabIndex,
    setTabIndex,
  };

  return (
    <OrderPageStyled>
      <GlobalContext.Provider value={adminContextValue}>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </GlobalContext.Provider>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;

  .container {
    background-color: ${theme.colors.white};
    width: 1400px;
    height: 95vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    border-radius: ${theme.borderRadius.extraRound};
    overflow: hidden;
  }
`;
