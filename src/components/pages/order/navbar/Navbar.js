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
  width: 100%;
  height: 10%;
  padding: 0px 70px 0px 20px;
  .logo-order-page {
    cursor: pointer;
  }
`;
