import { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../../../../context/GlobalContext";
import ImagePreview from "./ImagePreview";
import { getInputsConfig } from "./inputsConfig";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { productDefault } from "../../../../../../../fakeData/productDefault";
import SubmitMessage from "./SubmitMessage";
import Button from "../../../../../../reusable-ui/Button";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};
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
      ...productDefault,
      id: crypto.randomUUID(),
      title: newProduct.title,
      imageSource: newProduct.imageSource,
      price: newProduct.price,
    });

    setNewProduct(EMPTY_PRODUCT);

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  const inputs = getInputsConfig(newProduct);

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={newProduct.imageSource} />

      <div className="input-fields">
        {inputs.map(({ id, type, name, placeholder, value, Icon, pattern }) => {
          console.log(id);
          return (
            <TextInput
              key={id}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              pattern={name === "imageSource" ? pattern : null}
              Icon={Icon}
              onChange={handleChange}
              variant="minimalist"
            />
          );
        })}
      </div>

      <div className="submit">
        <Button
          label={"Ajouter un nouveau produit au menu"}
          classname="submit-button"
          variant="success"
        />
        {isSuccess && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  height: 100%;
  width: 70%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / 4 / -1;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / 2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      height: 100%;
    }
  }
`;
