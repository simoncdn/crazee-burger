import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../theme";
import GlobalContext from "../../../context/GlobalContext";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { useEffect } from "react";

export default function TabsPanel() {
  const { isWindowPanel, setIsWindowPanel, isTabIndex, setIsTabIndex } =
    useContext(GlobalContext);

  const tabs = [
    {
      index: 0,
      label: "",
      icon: isWindowPanel ? (
        <FiChevronDown className="icon" />
      ) : (
        <FiChevronUp className="icon" />
      ),
      onClick: () => setIsWindowPanel(!isWindowPanel),
    },
    {
      index: 1,
      label: "Ajouter un produit",
      icon: <AiOutlinePlus className="icon" />,
      onClick: () => changeTabOnIndex(0),
    },
    {
      index: 2,
      label: "Modifier un produit",
      icon: <MdModeEditOutline className="icon" />,
      onClick: () => changeTabOnIndex(1),
    },
  ];

  const changeTabOnIndex = (index) => {
    setIsTabIndex(index);
    setIsWindowPanel(true);
  };

  useEffect(() => {
    if (isWindowPanel === false) {
      setIsTabIndex(0);
    }
    // return (index) => {
    //   setIsTabIndex(index);
    // };
  }, [isWindowPanel, setIsTabIndex]);

  return (
    <TabsPanelStyled>
      {tabs.map((tab, index) => (
        <PrimaryButton
          key={index}
          label={tab.label}
          Icon={tab.icon}
          className={isTabIndex === tab.index ? "tab active" : "tab"}
          onClick={tab.onClick}
        />
      ))}
    </TabsPanelStyled>
  );
}

const TabsPanelStyled = styled.div`
  display: flex;
  height: 42px;
  width: 100%;
  align-items: center;
  padding-left: 70px;
  position: absolute;
  .tab {
    width: auto;
    height: 42px;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin-left: 1px;
    border: 1px solid ${theme.colors.greyLight};
    background-color: ${theme.colors.white};
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P1};
    color: ${theme.colors.greyMedium};
    z-index: 2;
    :nth-child(2),
    :nth-child(3) {
      gap: 12px;
    }
    &.active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.background_dark};
      border: 1px solid ${theme.colors.background_dark};
      font-weight: ${theme.fonts.weights.regular};
    }
  }
  .window-panel {
    display: block;
    &.close {
      display: none;
    }
  }
`;
