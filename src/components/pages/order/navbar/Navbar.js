import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Logo from "../../../reusable-ui/Logo";
import NavbarRightSide from "./NavbarRightSide";
import refreshPage from "../../../../utils/window";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={refreshPage} />
      <NavbarRightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 0px 70px 0px 20px;
  border-bottom: 1px solid #e4e5e9;
  .logo-order-page {
    cursor: pointer;
  }
`;
