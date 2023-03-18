import { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../../../../context/GlobalContext";
import { theme } from "../../../../../../../theme";
import ImagePreview from "./ImagePreview";
import { getInputsConfig } from "./inputsConfig";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { productDefault } from "../../../../../../../fakeData/productDefault";
import SubmitMessage from "./SubmitMessage";
import Button from "../../../../../../reusable-ui/Button";

const initialState = {
  idTitle: crypto.randomUUID(),
  idImageSource: crypto.randomUUID(),
  idPrice: crypto.randomUUID(),
  title: "",
  imageSource: "",
  price: 0,
};
export default function AddForm() {
  const { handleAdd } = useContext(GlobalContext);
  const [inputData, setInputData] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...productDefault,
      id: crypto.randomUUID(),
      title: inputData.title,
      imageSource: inputData.imageSource,
      price: inputData.price,
    };
    console.log(newProduct);
    handleAdd(newProduct);
    setInputData(initialState);

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  const inputs = getInputsConfig(inputData);
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview inputData={inputData.imageSource} />

      <div className="inputs-fields">
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

      <div className="submit-button">
        <Button
          label={"Ajouter un nouveau produit au menu"}
          classname="submit-btn"
          variant="success"
        />
        {isSuccess && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  width: 80%;
  display: grid;
  padding: 40px 0px 45px 60px;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(4, 35px);
  grid-row-gap: ${theme.spacing.xs};
  grid-column-gap: ${theme.spacing.md};

  .inputs-fields {
    display: grid;
    gap: ${theme.spacing.xs};
    grid-area: 1 / 2 / 4 / 3;
  }

  .submit-button {
    grid-area: 4 / 2 / 5 / 3;
    height: 35px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 18px;
  }
`;
