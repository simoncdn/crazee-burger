import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketTotal from "./BasketTotal";
import BasketFooter from "./BasketFooter";
import BasketBody from "./BasketBody";
import { formatPrice } from "../../../../../utils/maths";
import GlobalContext from "../../../../../context/GlobalContext";

export default function Basket() {
  const { totalPrice } = useContext(GlobalContext);

  return (
    <BasketStyled>
      <BasketTotal totalPrice={formatPrice(totalPrice)} />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  overflow-y: hidden;
`;
