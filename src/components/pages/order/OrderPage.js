import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import GlobalContext from "../../context/GlobalContext";
import { useState } from "react";

export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isWindowPanel, setIsWindowPanel] = useState(true);
  const [isTabIndex, setIsTabIndex] = useState("add");

  const globalContextValue = {
    isAdminMode,
    setIsAdminMode,
    isWindowPanel,
    setIsWindowPanel,
    isTabIndex,
    setIsTabIndex,
  };

  return (
    <OrderPageStyled>
      <GlobalContext.Provider value={globalContextValue}>
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
