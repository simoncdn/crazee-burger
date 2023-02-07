import React from "react";
import { useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../theme";
import GlobalContext from "../../../context/GlobalContext";

export default function TogglePanelButton() {
  const { isWindowPanel, setIsWindowPanel } = useContext(GlobalContext);
  return (
    <TogglePanelButtonStyled
      onClick={() => setIsWindowPanel(!isWindowPanel)}
      className={isWindowPanel ? "" : "toggle active"}
    >
      {isWindowPanel ? (
        <FiChevronDown className="icon" />
      ) : (
        <FiChevronUp className="icon" />
      )}
    </TogglePanelButtonStyled>
  );
}

const TogglePanelButtonStyled = styled.button`
  width: auto;
  height: 43px;
  padding-left: 70px;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1px;
  padding: 18px 24px;
  cursor: pointer;
  border: 1px solid ${theme.colors.greyLight};
  border-bottom: 2px solid ${theme.colors.greyLight};
  background-color: ${theme.colors.white};
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P1};
  color: ${theme.colors.greyMedium};
  z-index: 10;
  transform: translateY(-1px);
  :hover {
    border-bottom: 2px solid ${theme.colors.white};
  }
  &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.background_dark};
    border: 1px solid ${theme.colors.background_dark};
  }
`;
