import React from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyled>
      <span>Codé avec ❤️ et React.js</span>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: flex;
  height: 70px;
  background-color: ${theme.colors.background_dark};
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P2};
`;
