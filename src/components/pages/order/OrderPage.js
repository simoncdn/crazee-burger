import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";
import { useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import fakeMenu2 from "../../../fakeData/fakeMenu";

export default function OrderPage() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [data, setData] = useState(fakeMenu2);

  const globalContextValue = {
    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    data,
    setData,
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
