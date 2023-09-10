import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import GlobalContext from "../../../../../context/GlobalContext";
import BasketBody from "./BasketBody";
import {
  formatPrice,
  replaceFrenchCommaWithDot,
} from "../../../../../utils/maths";
import BasketFooter from "./BasketFooter";
import BasketTotal from "./BasketTotal";

export default function Basket() {
  const { basketMenu } = useContext(GlobalContext);

  const updateTotalPrice = basketMenu.reduce((total, product) => {
    const price = replaceFrenchCommaWithDot(product.price);

    if (isNaN(price)) return total;
    total += price * product.quantity;
    return total;
  }, 0);

  return (
    <BasketStyled>
      <BasketTotal totalPrice={formatPrice(updateTotalPrice)} />

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
`

