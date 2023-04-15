import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm/AddForm";
import EditForm from "./AdminPanel/EditForm/EditForm";
import HintEditMessage from "./AdminPanel/EditForm/HintEditMessage";

export const tabsConfig = (productBeingEdited) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Panel: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Panel: productBeingEdited ? <EditForm /> : <HintEditMessage />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
