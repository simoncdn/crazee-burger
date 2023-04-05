import React, { useContext } from "react";

import GlobalContext from "../../../../../../../context/GlobalContext";
import EditForm from "./EditForm";
import EmptyEdit from "./EmptyEdit";

export default function EditPanel() {
  const { productSelected } = useContext(GlobalContext);
  return <div>{productSelected ? <EditForm /> : <EmptyEdit />}</div>;
}
