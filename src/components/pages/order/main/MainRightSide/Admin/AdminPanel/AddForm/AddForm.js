import { useContext } from "react";
import GlobalContext from "../../../../../../../../context/GlobalContext";
import { EMPTY_PRODUCT } from "../../../../../../../../enum/product";
import AdminForm from "../../../../../../../reusable-ui/AdminForm";
import SubmitButton from "./SubmitButton";
import { useDisplaySuccessMessage } from "../../../../../../../../hooks/useDisplaySuccessMessage";

export default function AddForm() {
  const { newProduct, setNewProduct, handleAdd, username } = useContext(GlobalContext);
  const { isSuccess, displaySuccessMessage } = useDisplaySuccessMessage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd(username,{
      ...newProduct,
      id: crypto.randomUUID(),
    });
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  return (
    <AdminForm
      product={newProduct}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <SubmitButton isSuccess={isSuccess} />
    </AdminForm>
  );
}
