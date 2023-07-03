import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketTotal({ totalPrice }) {
  return (
    <BasketTotalStyled>
      <span>Total</span>
      <span>{totalPrice}</span>
    </BasketTotalStyled>
  );
}

const BasketTotalStyled = styled.div`
  display: flex;
  height: 70px;
  background-color: ${theme.colors.background_dark};
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  font-family: ${theme.fonts.family.stylish};
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
