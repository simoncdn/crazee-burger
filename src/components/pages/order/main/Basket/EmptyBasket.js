import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyBasket() {
  return <EmptyBasketStyled>Votre commande est vide.</EmptyBasketStyled>;
}

const EmptyBasketStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
  background: transparent;
`;
