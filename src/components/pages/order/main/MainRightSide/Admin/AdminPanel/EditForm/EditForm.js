import React, { useContext } from "react";
import GlobalContext from "../../../../../../../../context/GlobalContext";
import AdminForm from "../../../../../../../reusable-ui/AdminForm";
import InfoEditMessage from "./InfoEditMessage";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const productBeingEdited = { ...productSelected, [name]: value };

    setProductSelected(productBeingEdited);
    handleEdit(productBeingEdited);
  };

  return (
    <AdminForm
      product={productSelected}
      onChange={handleChange}
      ref={titleEditRef}
    >
      <InfoEditMessage />
    </AdminForm>
  );
}
