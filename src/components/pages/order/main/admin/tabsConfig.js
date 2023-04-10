import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./adminPanel/addForm/AddForm";
import EmptyEdit from "./adminPanel/editForm/EmptyEdit";
import TestForm from "./adminPanel/TestForm";
import EditForm from "./adminPanel/editForm/EditForm";

export const tabsConfig = [
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
    Panel: <EditForm />,
  },
  {
    index: "test",
    label: "tab de test",
    Icon: <MdModeEditOutline />,
    Panel: <TestForm />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
