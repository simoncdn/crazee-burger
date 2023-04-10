import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import ImagePreview from "../pages/order/main/admin/adminPanel/addForm/ImagePreview";
import { getInputsConfig } from "../pages/order/main/admin/adminPanel/addForm/inputsConfig";
import Button from "./Button";
import SubmitMessage from "../pages/order/main/admin/adminPanel/addForm/SubmitMessage";

export default function AdminForm({
  product,
  onChange,
  titleEditBoxRef,
  onSubmit,
  isSuccess,
  buttonLabel,
  submitLabel,
  buttonVariant,
  submitIcon,
}) {
  const inputs = getInputsConfig(product);

  return (
    <AdminFormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title} />

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
              onChange={onChange}
              variant="minimalist"
              ref={name === "title" ? titleEditBoxRef : null}
            />
          );
        })}
      </div>

      {onSubmit && (
        <div className="submit">
          <Button
            label={buttonLabel}
            classname="submit-button"
            variant={buttonVariant}
          />
          {isSuccess && (
            <SubmitMessage submitLabel={submitLabel} Icon={submitIcon} />
          )}
        </div>
      )}
    </AdminFormStyled>
  );
}

const AdminFormStyled = styled.form`
  height: 100%;
  /* width: 70%; */
  display: grid;
  grid-area: 1 / 1 / -1 / -1;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  .input-fields {
    grid-area: 1 / 2 / 4 / -1;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px;
  }

  .form-bottom {
    grid-area: 4 / 2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
    color: #ffa01b;
    font-size: 15px;
  }
  .submit {
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
    height: 35px;
    .submit-button {
      height: 100%;
    }
  }
`;
