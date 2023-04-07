import React, { useContext } from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import GlobalContext from "../../../../../../../context/GlobalContext";
import EditForm from "./EditForm";

export default function EmptyEdit() {
  const { productSelected } = useContext(GlobalContext);

  if (productSelected) {
    return <EditForm />;
  }

  return (
    <EmptyEditStyled>
      <span>Cliquer sur un produit pour le modifier</span>
      <HiCursorClick className="icon" />
    </EmptyEditStyled>
  );
}

const EmptyEditStyled = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
  margin-top: 50px;
  span {
    font-family: "Amatic SC";
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyBlue};
  }
  .icon {
    width: 20px;
    height: 20px;
    color: ${theme.colors.greyBlue};
  }
`;
