import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import GlobalContext from "../../../../../context/GlobalContext";
import BasketBody from "./BasketBody";
import {
  formatPrice,
  replaceFrenchCommaWithDot,
} from "../../../../../utils/maths";

export default function Basket() {
  const { basketMenu } = useContext(GlobalContext);

  const updateTotalPrice = basketMenu.reduce((acc, product) => {
    const price = replaceFrenchCommaWithDot(product.price);

    if (isNaN(price)) return acc;
    acc += price * product.quantity;
    return acc;
  }, 0);

  return (
    <BasketStyled>
      <div className="total">
        Total
        <span>{formatPrice(updateTotalPrice)}</span>
      </div>

      <BasketBody />

      <div className="footer">
        <span>Codé avec ❤️ et React.js</span>
      </div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* box-shadow: ${theme.shadows.strong}; */
  box-shadow: 8px 0px 20px 8px rgba(0, 0, 0, 0.2) inset; // alternative plus proche de la maquette
  background-color: ${theme.colors.background_white};
  overflow-y: hidden;

  .total,
  .footer {
    height: 70px;
    background-color: ${theme.colors.background_dark};
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 18px;
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    span {
      font-weight: ${theme.fonts.weights.bold};
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P2};
  }
`;
