import React from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";

export default function NavbarRightSide() {
  return (
    <NavbarRightSideStyled className="nav-side-right">
      <ToggleButton />
      <Profile />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  .admin-button {
    background-color: green;
    margin-right: 40px;
  }
  .profile {
    text-align: right;
    h1 {
      color: ${theme.colors.greyMedium};
      font-size: ${theme.fonts.size.P2};
    }
    span {
      color: ${theme.colors.primary};
    }
    button {
      border: none;
      background-color: ${theme.colors.white};
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.greyMedium};
      cursor: pointer;
    }
  }
  .icon {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyDark};
    margin-left: ${theme.spacing.sm};
    margin-right: 50px;
  }
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
