import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketFooter() {
  return (
    <BasketFooterStyled>
      <span>Codé avec ❤️ et React.js</span>
    </BasketFooterStyled>
  );
}
const BasketFooterStyled = styled.div`
  height: 70px;
  background-color: ${theme.colors.background_dark};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P2};
  font-weight: ${theme.fonts.weights.bold};
`;
