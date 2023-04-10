import React, { useContext, useState } from "react";
import AdminForm from "../../../../../reusable-ui/AdminForm";
import { EMPTY_PRODUCT } from "../../../../../../utils/emptyProduct";
import styled from "styled-components";
import GlobalContext from "../../../../../../context/GlobalContext";
import { AiOutlinePlus } from "react-icons/ai";

export default function TestForm() {
  const { handleAdd } = useContext(GlobalContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd({
      ...newProduct,
      id: crypto.randomUUID(),
    });

    setNewProduct(EMPTY_PRODUCT);

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <AddFormStyled>
      <AdminForm
        product={newProduct}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isSuccess={isSuccess}
        buttonLabel={"Button label test"}
        buttonVariant="test"
        submitLabel={"Submit label test"}
        submitIcon={<AiOutlinePlus />}
      />
    </AddFormStyled>
  );
}

const AddFormStyled = styled.div`
  width: 70%;
`;
