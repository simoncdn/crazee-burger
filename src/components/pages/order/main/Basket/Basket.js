import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="total">
        <span>Total</span>
        <span>0,00 €</span>
      </div>
      <div className="body">
        <span>Votre commande est vide.</span>
      </div>
      <div className="footer">
        <span>Codé avec ❤️ et React.js</span>
      </div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.strong};
  background-color: ${theme.colors.background_white};
  .body {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    background: transparent;
  }

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
