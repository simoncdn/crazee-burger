import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import ImagePreview from "../pages/order/main/MainRightSide/Admin/AdminPanel/ImagePreview";
import { getInputsConfig } from "../pages/order/main/MainRightSide/Admin/AdminPanel/inputsConfig";

const AdminForm = React.forwardRef(
  ({ product, onChange, onSubmit, children }, ref) => {
    const inputs = getInputsConfig(product);

    return (
      <AdminFormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />

        <div className="input-fields">
          {inputs.map((input) => {
            return (
              <TextInput
                key={input.id}
                {...input}
                pattern={input.name === "imageSource" ? input.pattern : null}
                Icon={input.Icon}
                onChange={onChange}
                variant="minimalist"
                ref={ref && input.name === "title" ? ref : null}
              />
            );
          })}
        </div>

        <div className="form-footer">{children}</div>
      </AdminFormStyled>
    );
  }
);
export default AdminForm;

const AdminFormStyled = styled.form`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  width: 70%;
  grid-row-gap: 8px;
  .input-fields {
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }
  .form-footer {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
