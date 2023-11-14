import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Logo from "../../../reusable-ui/Logo";
import NavbarRightSide from "./NavbarRightSide";
import refreshPage from "../../../../utils/window";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={() => refreshPage()} />
      <NavbarRightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 0 20px;
  border-bottom: 1px solid ${theme.colors.greyLight};
  .logo-order-page {
    cursor: pointer;
  }
`;
