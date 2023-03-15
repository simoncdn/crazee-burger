import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../../../../../context/GlobalContext";
import { theme } from "../../../../../../theme";
import ImagePreview from "./ImagePreview";
import { inputsConfig } from "./inputsConfig";
import TextInput from "../../../../../reusable-ui/TextInput";
import defaultImageSource from "./coming-soon.png";
import { productDefault } from "../../../../../../fakeData/productDefault";
import SubmitButton from "./SubmitButton";

const initialState = {
  title: "",
  imageSource: "",
  price: "",
};
export default function AddForm() {
  const { menu, handleAdd } = useContext(GlobalContext);
  const [currentId, setCurrentId] = useState(menu.length);
  const [inputData, setInputData] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentId(currentId + 1);

    const newProduct = {
      ...productDefault,
      id: currentId + 1,
      title: inputData.title,
      imageSource:
        inputData.imageSource === ""
          ? defaultImageSource
          : inputData.imageSource,
      price:
        typeof parseInt(inputData.price) === "number" ? inputData.price : "Nan",
    };

    handleAdd(newProduct);
    setInputData(initialState);
    e.target.reset();
    setIsSuccess(true);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isSuccess]);

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        picture={defaultImageSource}
        inputData={inputData.imageSource}
      />

      <div className="inputs-fields">
        {inputsConfig.map((input, index) => (
          <TextInput
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            Icon={input.icon}
            onChange={handleChange}
            pattern={input.name === "imageSource" ? input.pattern : null}
            className="addFormInput"
          />
        ))}
      </div>

      <SubmitButton isSuccess={isSuccess} />
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
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding: 0px 14px;
      margin: 0;
      height: 35px;
      gap: ${theme.spacing.sm};
      background-color: ${theme.colors.background_white};
      .icon {
        color: ${theme.colors.greySemiDark};
      }
      input {
        width: 100%;
        border: none;
        background-color: ${theme.colors.background_white};
        &::placeholder {
          color: ${theme.colors.greySemiDark};
          background-color: ${theme.colors.background_white};
        }
      }
    }
  }
`;
