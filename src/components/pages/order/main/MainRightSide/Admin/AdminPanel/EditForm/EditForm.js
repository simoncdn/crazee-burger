import React, { useContext, useState } from "react";
import GlobalContext from "../../../../../../../../context/GlobalContext";
import InfoEditMessage from "./InfoEditMessage";
import SavingMessage from "./SavingMessage";
import { useDisplaySuccessMessage } from "../../../../../../../../hooks/useDisplaySuccessMessage";
import Form from "../Form/Form";

export default function EditForm() {
  const {
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    username,
  } = useContext(GlobalContext);
  const [valueOnFocus, setvalueOnFocus] = useState();
  const { isSuccess: isSaved, displaySuccessMessage } =
    useDisplaySuccessMessage();

  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };
    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated, username);
  };

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value;
    setvalueOnFocus(valueOnFocus);
  };
  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage();
    }
  };

  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      {isSaved ? <SavingMessage /> : <InfoEditMessage />}
    </Form>
  );
}
