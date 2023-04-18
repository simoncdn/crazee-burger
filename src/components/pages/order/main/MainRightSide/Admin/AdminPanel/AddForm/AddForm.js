import { useContext, useState } from "react";
import GlobalContext from "../../../../../../../../context/GlobalContext";
import { EMPTY_PRODUCT } from "../../../../../../../../enum/product";
import AdminForm from "../../../../../../../reusable-ui/AdminForm";
import SubmitButton from "./SubmitButton";

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(GlobalContext);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd({
      ...newProduct,
      id: crypto.randomUUID(),
    });
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const displaySuccessMessage = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
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
