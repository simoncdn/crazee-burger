import React from "react";
import Navbar from "./navbar/Navbar";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./main/Main";

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
      </div>
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
    flex-direction: column;
    justify-content: center;
    border-radius: ${theme.borderRadius.extraRound};
    overflow: hidden;
  }
`;
