import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import PanelButton from "../../../reusable-ui/PanelButton";

export default function TabsPanel() {
  const { isWindowPanel, setIsWindowPanel, isTabIndex, setIsTabIndex } =
    useContext(GlobalContext);

  const tabs = [
    {
      // index: 0,
      label: "",
      icon: isWindowPanel ? (
        <FiChevronDown className="icon" />
      ) : (
        <FiChevronUp className="icon" />
      ),
      onClick: () => setIsWindowPanel(!isWindowPanel),
      className: isWindowPanel ? "tab" : "tab active",
    },
    {
      index: 1,
      label: "Ajouter un produit",
      icon: <AiOutlinePlus className="icon" />,
      onClick: () => changeTabOnIndex(1),
      className: isTabIndex === 1 ? "tab active" : "tab",
    },
    {
      index: 2,
      label: "Modifier un produit",
      icon: <MdModeEditOutline className="icon" />,
      onClick: () => changeTabOnIndex(2),
      className: isTabIndex === 2 ? "tab active" : "tab",
    },
  ];

  const changeTabOnIndex = (index) => {
    setIsTabIndex(index);
    setIsWindowPanel(true);
  };

  // useEffect(() => {
  //   if (!isWindowPanel) {
  //     setIsTabIndex(1);
  //   } else if (isWindowPanel && isTabIndex === 0) {
  //     setIsTabIndex(1);
  //   }
  // }, [isWindowPanel, setIsTabIndex]);

  return (
    <TabsPanelStyled>
      {tabs.map(({ index, label, icon, onClick, className }) => (
        <PanelButton
          key={index}
          label={label}
          Icon={icon}
          className={className}
          onClick={onClick}
        />
      ))}
    </TabsPanelStyled>
  );
}

const TabsPanelStyled = styled.nav`
  display: flex;
  height: 42px;
  width: 100%;
  align-items: center;
  padding-left: 70px;
  position: absolute;
`;
