import React, { useContext } from "react";
import GlobalContext from "../../../../../../../context/GlobalContext";
import styled from "styled-components";
import AdminForm from "../../../../../../reusable-ui/AdminForm";
import EmptyEdit from "./EmptyEdit";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditBoxRef } =
    useContext(GlobalContext);

  const handleChange = (e) => {
    setProductSelected({
      ...productSelected,
      [e.target.name]: e.target.value,
    });
    handleEdit(productSelected, e);
  };

  if (!productSelected) {
    return <EmptyEdit />;
  }

  return (
    <EditFormStyled>
      <AdminForm
        product={productSelected}
        onChange={handleChange}
        titleEditBoxRef={titleEditBoxRef}
      />
      <p>
        Cliquer sur un produit du menu pour le modifier&nbsp;
        <span>en temps réel</span>
      </p>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 20px;
  p {
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
    height: 35px;
    color: #ffa01b;
    font-size: 15px;
    span {
      text-decoration: underline;
    }
  }
`;
