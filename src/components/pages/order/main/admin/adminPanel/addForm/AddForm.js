import { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../../../../context/GlobalContext";
import { EMPTY_PRODUCT } from "../../../../../../../utils/emptyProduct";
import AdminForm from "../../../../../../reusable-ui/AdminForm";
import { FiCheck } from "react-icons/fi";

export default function AddForm() {
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
        buttonLabel="Ajouter un nouveau produit au menu"
        buttonVariant="success"
        submitLabel="Ajouté avec succès !"
        submitIcon={<FiCheck />}
      />
    </AddFormStyled>
  );
}

const AddFormStyled = styled.div`
  width: 70%;
`;
