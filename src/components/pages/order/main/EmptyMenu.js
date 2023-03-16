import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function EmptyMenu() {
  return (
    <EmptyMenuStyled>
      <h3>Le menu est vide ?</h3>
      <p>Cliquez ci-dessous pour le réinitialiser</p>
      <PrimaryButton
        label="Générer de nouveaux produits"
        classname="empty-button"
      />
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3,
  p {
    text-transform: uppercase;
    font-family: "Amatic SC";
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
  h3 {
    font-weight: ${theme.fonts.weights.bold};
  }
  p {
    margin-top: 21px;
    margin-bottom: 31px;
  }
  .empty-button {
    width: fit-content;
    font-size: ${theme.fonts.size.XS};
  }
`;
