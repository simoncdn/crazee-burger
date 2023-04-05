import React, { useContext } from "react";
import ImagePreview from "../addForm/ImagePreview";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { getInputsConfig } from "../addForm/inputsConfig";
import GlobalContext from "../../../../../../../context/GlobalContext";
import styled from "styled-components";

export default function EditForm() {
  const { productSelected, setProductSelected } = useContext(GlobalContext);

  const inputs = getInputsConfig(productSelected);

  const handleChange = (e) => {
    setProductSelected({ ...productSelected, [e.target.name]: e.target.value });
  };
  console.log(productSelected);

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />

      <div className="input-fields">
        {inputs.map(({ id, type, name, placeholder, value, Icon, pattern }) => {
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
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
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
`;
