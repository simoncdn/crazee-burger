import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import GlobalContext from "../../../context/GlobalContext";
import AddProduct from "./AddProduct";
import Tabs from "./Tabs";
import WindowPanel from "./WindowPanel";
import ModifyProduct from "./ModifyProduct";

export default function Panel({ className }) {
  const { isWindowPanel, isTabIndex } = useContext(GlobalContext);

  const tabs = [
    {
      action: "add",
      label: "Ajouter un produit",
      icon: <AiOutlinePlus className="icon" />,
      window: <AddProduct />,
    },
    {
      action: "modify",
      label: "Modifier un produit",
      icon: <MdModeEditOutline className="icon" />,
      window: <ModifyProduct />,
    },
  ];

  return (
    <PanelStyled className={className}>
      <Tabs tabs={tabs} />

      <WindowPanel
        className={isWindowPanel ? "" : "close"}
        tabs={tabs}
        isTabIndex={isTabIndex}
      />
    </PanelStyled>
  );
}

const PanelStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  .close {
    display: none;
  }
`;
