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

    handleAdd(newProduct);
    setInputData(initialState);

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview inputData={inputData.imageSource} />

      <div className="inputs-fields">
        {getInputsConfig(inputData).map(
          ({ id, type, name, placeholder, value, Icon, pattern }) => (
            <TextInput
              key={id}
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              Icon={Icon}
              onChange={handleChange}
              pattern={name === "imageSource" ? pattern : null}
              className="addFormInput"
              variant="minimalist"
            />
          )
        )}
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
    .addFormInput {
      padding: 0px 24px;
      margin: 0;
      height: 35px;
      .icon {
        margin-right: 15px;
      }
    }
  }

  .submit-button {
    grid-area: 4 / 2 / 5 / 3;
    height: 35px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 18px;
  }
`;
