import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./adminPanel/addForm/AddForm";
import EmptyEdit from "./adminPanel/editForm/EmptyEdit";
import EditForm from "./adminPanel/editForm/EditForm";

export const tabsConfig = [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Panel: {
      default: <AddForm />,
    },
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Panel: {
      default: <EmptyEdit />,
      edit: <EditForm />,
    },
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
