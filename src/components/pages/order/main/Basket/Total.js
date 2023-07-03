import React, { useContext } from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";
import GlobalContext from "../../../../../context/GlobalContext";
import { formatPrice } from "../../../../../utils/maths";
import { calculateSumToPay } from "./helper";

export default function Total() {
  const { basketMenu, menu } = useContext(GlobalContext);

  const totalPrice = calculateSumToPay(basketMenu, menu);

  return (
    <TotalStyled>
      Total
      <span>{formatPrice(totalPrice)}</span>
    </TotalStyled>
  );
}

const TotalStyled = styled.div`
  height: 70px;
  background-color: ${theme.colors.background_dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  font-family: ${theme.fonts.family.stylish};
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
